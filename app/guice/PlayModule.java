package guice;

import business.CameraBLL;
import business.CameraBLLImpl;
import com.google.inject.AbstractModule;
import dao.CameraDao;
import dao.CameraDaoImpl;
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
    }
}
