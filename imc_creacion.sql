create database imc;
use imc;

create table dependencia
(
codigo_dependencia varchar(15)not null,
nombre_dependencia varchar(50) not null,
constraint dependencia_pk primary key(codigo_dependencia)
);

create table paciente
(
codigo_paciente varchar(15)not null,
estatura_paciente float not null,
peso_paciente float not null,
imc_paciente float not null,
clasificacion_paciente varchar(50) not null,
recomendacion_paciente varchar(100) not null,
constraint paciente_pk primary key(codigo_paciente)
);

create table estudiante
(
codigo_estudiante varchar(15)not null,
codigo_dependencia varchar(15)not null,
codigo_paciente varchar(15)not null,
nomb_estudiante varchar(50) not null,
apellido_estudiante varchar(50) not null,
direccion_estudiante varchar(50) not null,
dependencia_estudiante varchar(50) not null,
telefono_estudiante varchar(50) not null,
constraint estudiante_pk primary key(codigo_estudiante),
constraint estudiante_codigo_dependencia_fk foreign key(codigo_dependencia) references dependencia(codigo_dependencia),
constraint estudiante_codigo_paciente_fk foreign key(codigo_paciente) references paciente(codigo_paciente)
);

create table profesor
(
codigo_profesor varchar(15)not null,
codigo_dependencia varchar(15)not null,
codigo_paciente varchar(15)not null,
nomb_profesor varchar(50) not null,
apellido_profesor varchar(50) not null,
direccion_profesor varchar(50) not null,
dependencia_profesor varchar(50) not null,
telefono_profesor varchar(50) not null,
constraint profesor_pk primary key(codigo_profesor),
constraint profesor_codigo_dependencia_fk foreign key(codigo_dependencia) references dependencia(codigo_dependencia),
constraint profesor_codigo_paciente_fk foreign key(codigo_paciente) references paciente(codigo_paciente)
);

create table administrativo
(
codigo_administrativo varchar(15)not null,
codigo_dependencia varchar(15)not null,
codigo_paciente varchar(15)not null,
nomb_administrativo varchar(50) not null,
apellido_administrativo varchar(50) not null,
direccion_administrativo varchar(50) not null,
dependencia_administrativo varchar(50) not null,
telefono_administrativo varchar(50) not null,
constraint administrativo_pk primary key(codigo_administrativo),
constraint administrativo_codigo_dependencia_fk foreign key(codigo_dependencia) references dependencia(codigo_dependencia),
constraint administrativo_codigo_paciente_fk foreign key(codigo_paciente) references paciente(codigo_paciente)
);





