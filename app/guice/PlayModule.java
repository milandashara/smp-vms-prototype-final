package guice;

import business.CameraBLL;
import business.CameraBLLImpl;
import business.SearchAndViewCameraBLL;
import business.SearchAndViewCameraBLLImpl;
import com.google.inject.AbstractModule;
import dao.CameraDao;
import dao.CameraDaoImpl;
import service.CameraService;
import service.CameraServiceImpl;
import service.SearchAndViewCameraService;
import service.SearchAndViewCameraServiceImpl;
import smpapi.AuthenticationApi;
import smpapi.AuthenticationApiImpl;

/**
 * Created by milan on 12/9/2014.
 */
public class PlayModule extends AbstractModule {
    @Override
    protected void configure() {
        bind(CameraDao.class).to(CameraDaoImpl.class);
        bind(CameraBLL.class).to(CameraBLLImpl.class);
        bind(CameraService.class).to(CameraServiceImpl.class);
//        bind(CameraClusterDao.class).to(CameraClusterDaoImpl.class);
//        bind(CameraClusterBLL.class).to(CameraClusterBLLImpl.class);
//        bind(CameraClusterService.class).to(CameraClusterServiceImpl.class);
        bind(SearchAndViewCameraBLL.class).to(SearchAndViewCameraBLLImpl.class);
        bind(SearchAndViewCameraService.class).to(SearchAndViewCameraServiceImpl.class);
        bind(AuthenticationApi.class).to(AuthenticationApiImpl.class);
    }
}
