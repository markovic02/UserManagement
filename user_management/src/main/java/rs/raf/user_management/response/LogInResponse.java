package rs.raf.user_management.response;

public class LogInResponse {
    private String jwt;

    public LogInResponse(String jwt) {
        this.jwt = jwt;
    }
}
