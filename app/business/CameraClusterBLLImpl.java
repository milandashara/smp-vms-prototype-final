package business;

import dao.CameraClusterDao;
import models.Camera;
import models.CameraCluster;
import play.data.validation.ValidationError;
import play.i18n.Messages;

import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Mani on 12/16/2014.
 */
public class CameraClusterBLLImpl implements CameraClusterBLL {

    @Inject
    CameraClusterDao cameraClusterDao;

    @Override
    public List<CameraCluster> findAll() {
        return cameraClusterDao.findAll();
    }

    @Override
    public List<CameraCluster> findByCameraClusterName(String search) {
        return cameraClusterDao.findByCameraClusterName(search);
    }

    @Override
    public CameraCluster findById(Long id) {
        return cameraClusterDao.findById(id);
    }

    @Override
    public List<ValidationError> addCameraCluster(CameraCluster cameraCluster) {
        List<ValidationError> errors = new ArrayList<ValidationError>();
        try {

            if (!isCameraClusterNameExistForAddingNewCamera(cameraCluster))
                cameraClusterDao.addCameraCluster(cameraCluster);
            else
                errors.add(new ValidationError("cameraCluster.nameAlreadyExist", Messages.get("cameraCluster.nameAlreadyExist")));

        } catch (Exception e) {
            ValidationError error=new ValidationError(e.getMessage(),e.getMessage());
            errors.add(error);
        }

        return errors;
    }

    private boolean isCameraClusterNameExistForAddingNewCamera(CameraCluster cameraCluster)
    {
        List<CameraCluster> cameras=cameraClusterDao.findByCameraClusterName(cameraCluster.name);
        return cameras == null || cameras.isEmpty()?false:true;
    }

    @Override
    public List<ValidationError> updateCameraCluster(CameraCluster cameraCluster) {
        return null;
    }

    @Override
    public List<CameraCluster> search(String searchStr) {
        return null;
    }

    @Override
    public List<ValidationError> deleteCameraCluster(Long id) {
        return null;
    }
}
