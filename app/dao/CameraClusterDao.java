package dao;

import models.Camera;
import models.CameraCluster;
import play.data.validation.ValidationError;

import java.util.List;

/**
 * Created by Mani on 12/16/2014.
 */
public interface CameraClusterDao {

    public List<CameraCluster> findAll();

    List<CameraCluster> findByCameraClusterName(String search);

    CameraCluster findById(Long id);

    void addCameraCluster(CameraCluster camera);

    void modifyCameraCluster(CameraCluster camera);

    List<ValidationError> deleteCameraCluster(Long id);

    List<CameraCluster> findByCameraClusterNameExceptGivenId(String name,Long id);

    List<CameraCluster> search(String searchStr);
}
