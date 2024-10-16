package rs.raf.user_management.services;

import java.util.List;
import java.util.Optional;

public interface IService<T, ID> {
   <S extends T> S save(S var);
   Optional<T> findById(ID var1);
   List<T> findAll();
   void deleteById(ID var);
}
