package rs.raf.user_management.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;


@Entity
@Data
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    private String first_name, last_name;
    private String username, password;
//    private Set<Permission> permissions = new HashSet<>();

//        @ManyToMany
//        @JoinTable(
//                name = "user_permission1",
//                joinColumns = @JoinColumn(name = "user_id"),
//                inverseJoinColumns = @JoinColumn(name = "permission_id")
//        )
//        @JsonIgnore
//        private Collection<UserPermission> userPermissions;

//    @Column(name = "permission_name", nullable = false)
    @JsonIgnore
    @ElementCollection(targetClass = String.class, fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    private List<String> roles;
    public User() {
    }

    public User(Long user_id, String first_name, String last_name, String username, String password, List<String> roles) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
    //    public User(Long user_id, String first_name, String last_name, String username, String password) {
//        this.user_id = user_id;
//        this.first_name = first_name;
//        this.last_name = last_name;
//        this.username = username;
//        this.password = password;
//    }
    public User(String username, String password,  List<String> roles){
        this.username = username;
        this.password = password;
        this.roles = roles;
    }

}
