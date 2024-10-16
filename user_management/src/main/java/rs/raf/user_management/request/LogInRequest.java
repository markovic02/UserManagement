package rs.raf.user_management.request;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class LogInRequest {
    @NotNull
    private String username;
    @NotNull
    private String password;
}
