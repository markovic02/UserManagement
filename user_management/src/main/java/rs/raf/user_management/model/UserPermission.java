package rs.raf.user_management.model;

import lombok.Data;

import javax.persistence.*;
@Data
@Entity
@Table(name = "user_permission1")
public class UserPermission {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long user_permission_id;



        @ManyToOne
        @JoinColumn(name = "user_id", referencedColumnName = "user_id")
        private User user;

        @ManyToOne
        @JoinColumn(name = "permission_id", referencedColumnName = "permission_id")
        private Permission permission;


}
