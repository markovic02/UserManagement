package rs.raf.user_management.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import rs.raf.user_management.model.User;
import rs.raf.user_management.repositories.UserRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService, IService {

    private final UserRepository userRepository;


    @Autowired
    public UserService(UserRepository userRepository) {this.userRepository = userRepository;}

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User myUser = this.userRepository.findByUsername(username);
        if(myUser == null) {
            throw new UsernameNotFoundException("User name " + username + " not found");
        }
//        myUser.getUserPermissions();
//        return new org.springframework.security.core.userdetails.User(myUser.getUsername(), myUser.getPassword(), (Collection) myUser.getUserPermissions());
        return new org.springframework.security.core.userdetails.User(myUser.getUsername(),
                myUser.getPassword(),
                new ArrayList<>());
    }

    @Override
    public User save(Object var) {
        return userRepository.save((User)var);
    }

    @Override
    public Optional<User> findById(Object var1) {
        return userRepository.findById((Long) var1);
    }

    @Override
    public List<User> findAll() {
        return (List<User>) userRepository.findAll();
    }


    @Override
    public void deleteById(Object var) {
        userRepository.deleteById((Long)var);
    }

}
