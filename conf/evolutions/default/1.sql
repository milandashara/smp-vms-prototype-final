# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table camera (
  id                        bigint not null,
  node                      varchar(255),
  name                      varchar(255),
  location_name             varchar(255),
  latitude                  double,
  longitude                 double,
  camera_cluster_id         bigint,
  constraint pk_camera primary key (id))
;

create table camera_cluster (
  id                        bigint not null,
  name                      varchar(255),
  constraint pk_camera_cluster primary key (id))
;

create sequence camera_seq;

create sequence camera_cluster_seq;

alter table camera add constraint fk_camera_cameraCluster_1 foreign key (camera_cluster_id) references camera_cluster (id) on delete restrict on update restrict;
create index ix_camera_cameraCluster_1 on camera (camera_cluster_id);



# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists camera;

drop table if exists camera_cluster;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists camera_seq;

drop sequence if exists camera_cluster_seq;

