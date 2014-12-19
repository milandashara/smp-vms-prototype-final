package common;

import play.Play;

/**
 * Created by milan on 12/18/2014.
 */
public interface SmpApiUrl {
    public static String baseUrl= Play.application().configuration().getString("smpApiBaseUrl");
    public static String loginUrl= baseUrl+Play.application().configuration().getString("loginUrl");
}
