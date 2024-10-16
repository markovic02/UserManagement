package rs.raf.user_management.repositories;

import org.springframework.data.repository.CrudRepository;
import rs.raf.user_management.model.User;

public interface UserRepository  extends CrudRepository<User, Long> {
//    User findByEmail(String email);
    public User findByUsername(String username);
//    void login(String email, String password);
}
