package guice;

import business.CameraBLL;
import business.CameraBLLImpl;
import business.CameraClusterBLL;
import business.CameraClusterBLLImpl;
import com.google.inject.AbstractModule;
import dao.CameraClusterDao;
import dao.CameraClusterDaoImpl;
import dao.CameraDao;
import dao.CameraDaoImpl;
import service.CameraClusterService;
import service.CameraClusterServiceImpl;
import service.CameraService;
import service.CameraServiceImpl;

/**
 * Created by milan on 12/9/2014.
 */
public class PlayModule extends AbstractModule {
    @Override
    protected void configure() {
        bind(CameraDao.class).to(CameraDaoImpl.class);
        bind(CameraBLL.class).to(CameraBLLImpl.class);
        bind(CameraService.class).to(CameraServiceImpl.class);
        bind(CameraClusterDao.class).to(CameraClusterDaoImpl.class);
        bind(CameraClusterBLL.class).to(CameraClusterBLLImpl.class);
        bind(CameraClusterService.class).to(CameraClusterServiceImpl.class);
    }
}
