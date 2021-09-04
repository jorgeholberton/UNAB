select est.*
from paciente as pac
inner join estudiante as est on est.codigo_paciente=pac.codigo_paciente
where pac.codigo_paciente='E456';


