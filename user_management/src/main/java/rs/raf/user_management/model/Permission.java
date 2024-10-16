package rs.raf.user_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class Permission {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long permission_id;

    private String permission_name;
    @JsonIgnore
    @OneToMany(mappedBy = "permission")
    private Set<UserPermission> userPermissions;
}
