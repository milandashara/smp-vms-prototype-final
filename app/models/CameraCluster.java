package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import play.db.ebean.Model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by John on 12/2/2014.
 */

@Entity
public class CameraCluster extends Model {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String name;

    @OneToMany
    public List<Camera> cameras;

    @OneToOne(mappedBy = "cameraCluster")
    public CameraAccessProfile cameraAccessProfile;

    public static Finder<Long, CameraCluster> find = new Finder(Long.class, CameraCluster.class);
}
