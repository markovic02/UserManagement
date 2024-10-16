package rs.raf.user_management.repositories;

import org.springframework.data.repository.CrudRepository;
import rs.raf.user_management.model.Permission;

public interface PermissionRepository extends CrudRepository<Permission,Long> {
}
