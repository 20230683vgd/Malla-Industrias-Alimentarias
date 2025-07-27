// --- 1. Definición de Datos de la Carrera ---

// Se crea un ID único para cada ramo para manejar las dependencias fácilmente.
const ramosData = [
    // Semestre 1
    { id: 'analisis-matematico-i', nombre: 'Análisis Matemático I', creditos: 3, semestre: 1, requisitos: [] },
    { id: 'quimica-general', nombre: 'Química General', creditos: 3, semestre: 1, requisitos: [] },
    { id: 'ecologia-general', nombre: 'Ecología General', creditos: 3, semestre: 1, requisitos: [] },
    { id: 'introduccion-industria', nombre: 'Introducción a la Industria Alimentaria', creditos: 3, semestre: 1, requisitos: [] },
    { id: 'sociedad-cultura', nombre: 'Sociedad y Cultura Peruana', creditos: 2, semestre: 1, requisitos: [] },
    { id: 'biologia-general', nombre: 'Biología General', creditos: 4, semestre: 1, requisitos: [] },
    // Semestre 2
    { id: 'analisis-matematico-ii', nombre: 'Análisis Matemático II', creditos: 3, semestre: 2, requisitos: ['analisis-matematico-i'] },
    { id: 'economia-general', nombre: 'Economía General', creditos: 3, semestre: 2, requisitos: [] },
    { id: 'quimica-organica', nombre: 'Química Orgánica', creditos: 3, semestre: 2, requisitos: ['quimica-general'] },
    { id: 'fisica-general', nombre: 'Física General', creditos: 3, semestre: 2, requisitos: ['analisis-matematico-i'] },
    { id: 'peru-contexto-internacional', nombre: 'Perú en el Contexto Internacional', creditos: 2, semestre: 2, requisitos: [] },
    { id: 'lenguaje-comunicacion', nombre: 'Lenguaje y Comunicación', creditos: 2, semestre: 2, requisitos: [] },
    // Semestre 3
    { id: 'analisis-matematico-iii', nombre: 'Análisis Matemático III', creditos: 3, semestre: 3, requisitos: ['analisis-matematico-ii'] },
    { id: 'bioquimica', nombre: 'Bioquímica', creditos: 4, semestre: 3, requisitos: ['quimica-organica', 'biologia-general'] },
    { id: 'estadistica-general', nombre: 'Estadística General', creditos: 3, semestre: 3, requisitos: ['analisis-matematico-ii'] },
    { id: 'redaccion-argumentacion', nombre: 'Redacción y Argumentación', creditos: 2, semestre: 3, requisitos: ['lenguaje-comunicacion'] },
    { id: 'administracion', nombre: 'Administración', creditos: 2, semestre: 3, requisitos: ['economia-general'] },
    { id: 'fisicoquimica-general', nombre: 'Fisicoquímica General', creditos: 4, semestre: 3, requisitos: ['fisica-general'] },
    { id: 'lab-bioquimica', nombre: 'Laboratorio de Bioquímica', creditos: 1, semestre: 3, requisitos: ['quimica-general', 'bioquimica'] },
    { id: 'quimica-analitica', nombre: 'Química Analítica', creditos: 4, semestre: 3, requisitos: ['quimica-general'] },
    // Semestre 4
    { id: 'analisis-matematico-iv', nombre: 'Análisis Matemático IV', creditos: 3, semestre: 4, requisitos: ['analisis-matematico-iii'] },
    { id: 'fisicoquimica-alimentos', nombre: 'Fisicoquímica de Alimentos', creditos: 3, semestre: 4, requisitos: ['fisicoquimica-general'] },
    { id: 'lab-microbiologia', nombre: 'Laboratorio de Microbiología', creditos: 1, semestre: 4, requisitos: ['bioquimica', 'lab-bioquimica'] },
    { id: 'microbiologia', nombre: 'Microbiología', creditos: 4, semestre: 4, requisitos: ['bioquimica', 'lab-bioquimica'] },
    { id: 'quimica-alimentos', nombre: 'Química de Alimentos', creditos: 4, semestre: 4, requisitos: ['bioquimica', 'quimica-analitica'] },
    { id: 'termodinamica-general', nombre: 'Termodinámica General', creditos: 4, semestre: 4, requisitos: ['analisis-matematico-iii'] },
    // Semestre 5
    { id: 'analisis-alimentos', nombre: 'Análisis de Alimentos', creditos: 4, semestre: 5, requisitos: ['quimica-alimentos', 'lab-bioquimica'] },
    { id: 'geometria-descriptiva', nombre: 'Geometría Descriptiva', creditos: 3, semestre: 5, requisitos: [] },
    { id: 'mecanica-fluidos', nombre: 'Mecánica de Fluidos', creditos: 4, semestre: 5, requisitos: ['termodinamica-general'] },
    { id: 'microbiologia-alimentos', nombre: 'Microbiología de Alimentos', creditos: 4, semestre: 5, requisitos: ['lab-microbiologia', 'microbiologia'] },
    { id: 'reologia', nombre: 'Reología', creditos: 3, semestre: 5, requisitos: ['fisicoquimica-alimentos', 'analisis-matematico-ii'] },
    { id: 'transferencia-calor-masa', nombre: 'Transferencia de Calor y Masa', creditos: 3, semestre: 5, requisitos: ['analisis-matematico-iv', 'termodinamica-general', 'fisicoquimica-alimentos'] },
    // Semestre 6
    { id: 'metodos-estadisticos', nombre: 'Métodos Estadísticos en Ingeniería', creditos: 3, semestre: 6, requisitos: ['estadistica-general'] },
    { id: 'ingenieria-alimentos-i', nombre: 'Ingeniería de Alimentos I', creditos: 4, semestre: 6, requisitos: ['mecanica-fluidos', 'reologia', 'transferencia-calor-masa'] },
    { id: 'ingenieria-alimentos-ii', nombre: 'Ingeniería de Alimentos II', creditos: 4, semestre: 6, requisitos: ['transferencia-calor-masa'] },
    { id: 'circuitos-motores', nombre: 'Circuitos Eléctricos y Motores', creditos: 3, semestre: 6, requisitos: ['fisica-general'] },
    { id: 'contabilidad-finanzas', nombre: 'Contabilidad y Finanzas', creditos: 2, semestre: 6, requisitos: ['administracion'] },
    // Semestre 7
    { id: 'etica-ciudadania', nombre: 'Ética y Ciudadanía', creditos: 2, semestre: 7, requisitos: [] },
    { id: 'metodologia-investigacion', nombre: 'Metodología de la Investigación', creditos: 2, semestre: 7, requisitos: [] },
    { id: 'alimentacion-nutricion', nombre: 'Alimentación y Nutrición Humana', creditos: 3, semestre: 7, requisitos: ['analisis-alimentos'] },
    { id: 'maquinaria-industria', nombre: 'Maquinaria para la Industria Alimentaria', creditos: 4, semestre: 7, requisitos: ['introduccion-industria', 'circuitos-motores'] },
    { id: 'tecnologia-postcosecha', nombre: 'Tecnología Postcosecha', creditos: 3, semestre: 7, requisitos: ['microbiologia-alimentos'] },
    { id: 'tecnologia-conservacion', nombre: 'Tecnología de Conservación', creditos: 4, semestre: 7, requisitos: ['microbiologia-alimentos', 'analisis-alimentos', 'ingenieria-alimentos-i'] },
    { id: 'electivo-7', nombre: 'Curso Electivo de Carrera', creditos: 3, semestre: 7, requisitos: [] },
    // Semestre 8
    { id: 'evaluacion-sensorial', nombre: 'Evaluación Sensorial de Alimentos', creditos: 2, semestre: 8, requisitos: ['tecnologia-conservacion', 'metodos-estadisticos'] },
    { id: 'fermentaciones-industriales', nombre: 'Fermentaciones Industriales', creditos: 3, semestre: 8, requisitos: ['tecnologia-conservacion', 'ingenieria-alimentos-ii'] },
    { id: 'fundamentos-control', nombre: 'Fundamentos de Control y Automatización', creditos: 3, semestre: 8, requisitos: ['maquinaria-industria'] },
    { id: 'tecnologia-alimentos-pecuarios', nombre: 'Tecnología de Alimentos Pecuarios', creditos: 3, semestre: 8, requisitos: ['tecnologia-conservacion', 'ingenieria-alimentos-ii'] },
    { id: 'tecnologia-extraccion', nombre: 'Tecnología de Extracción', creditos: 3, semestre: 8, requisitos: ['tecnologia-conservacion', 'ingenieria-alimentos-ii'] },
    { id: 'electivo-8', nombre: 'Curso Electivo de Carrera', creditos: 6, semestre: 8, requisitos: [] },
    // Semestre 9
    { id: 'control-calidad-inocuidad', nombre: 'Control de Calidad e Inocuidad de Alimentos', creditos: 4, semestre: 9, requisitos: ['evaluacion-sensorial'] },
    { id: 'diseno-ingenieria', nombre: 'Diseño en Ingeniería', creditos: 4, semestre: 9, requisitos: ['alimentacion-nutricion', 'tecnologia-alimentos-pecuarios', 'fundamentos-control', 'evaluacion-sensorial'] },
    { id: 'ingenieria-produccion', nombre: 'Ingeniería de la Producción', creditos: 3, semestre: 9, requisitos: ['tecnologia-alimentos-pecuarios'] },
    { id: 'ingenieria-frio', nombre: 'Ingeniería del Frio', creditos: 3, semestre: 9, requisitos: ['tecnologia-conservacion', 'tecnologia-postcosecha'] },
    { id: 'seminario-industria-9', nombre: 'Seminario en Industria Alimentarias', creditos: 3, semestre: 9, requisitos: ['metodologia-investigacion', 'metodos-estadisticos', 'redaccion-argumentacion'] },
    { id: 'electivo-9', nombre: 'Curso Electivo de Carrera', creditos: 6, semestre: 9, requisitos: [] },
    // Semestre 10
    { id: 'ingenieria-proyecto', nombre: 'Ingeniería de Proyecto', creditos: 4, semestre: 10, requisitos: ['ingenieria-produccion'] },
    { id: 'seminario-industria-10', nombre: 'Seminario en Industrial Alimentarias', creditos: 1, semestre: 10, requisitos: ['seminario-industria-9'] },
    { id: 'sistemas-integrados', nombre: 'Sistema Integrados de Gestión', creditos: 4, semestre: 10, requisitos: ['control-calidad-inocuidad'] },
    { id: 'taller-emprendimiento', nombre: 'Taller de Emprendimiento', creditos: 1, semestre: 10, requisitos: [] },
    { id: 'taller-proyecto', nombre: 'Taller de Ingeniería de Proyecto', creditos: 1, semestre: 10, requisitos: ['ingenieria-produccion'] },
    { id: 'practicas-preprofesionales', nombre: 'Prácticas Pre-Profesionales', creditos: 1, semestre: 10, requisitos: [] },
    { id: 'trabajo-investigacion', nombre: 'Trabajo de Investigación', creditos: 0, semestre: 10, requisitos: [] },
    { id: 'electivo-10', nombre: 'Curso Electivo de Carrera', creditos: 0, semestre: 10, requisitos: [] },
];


// --- 2. Lógica de la Aplicación ---

// Espera a que el DOM esté completamente cargado para ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-curricular');
    // Carga los ramos aprobados desde localStorage. Si no hay, usa un conjunto vacío.
    // Usar un Set es más eficiente para verificar si un ramo está aprobado.
    let aprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    /**
     * Dibuja toda la malla curricular en la página.
     */
    function dibujarMalla() {
        const ramosPorSemestre = {};
        for (const ramo of ramosData) {
            if (!ramosPorSemestre[ramo.semestre]) {
                ramosPorSemestre[ramo.semestre] = [];
            }
            ramosPorSemestre[ramo.semestre].push(ramo);
        }

        mallaContainer.innerHTML = ''; // Limpia el contenedor antes de dibujar

        for (const semestre in ramosPorSemestre) {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            const titulo = document.createElement('h3');
            titulo.className = 'semestre-titulo';
            titulo.textContent = `Semestre ${semestre}`;
            semestreDiv.appendChild(titulo);

            for (const ramo of ramosPorSemestre[semestre]) {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.dataset.id = ramo.id; // Asigna el ID para identificarlo
                ramoDiv.innerHTML = `
                    <span class="ramo-nombre">${ramo.nombre}</span>
                    <span class="ramo-creditos">${ramo.creditos} C</span>
                `;
                ramoDiv.addEventListener('click', () => toggleAprobacion(ramo.id));
                semestreDiv.appendChild(ramoDiv);
            }
            mallaContainer.appendChild(semestreDiv);
        }
    }

    /**
     * Alterna el estado de un ramo entre aprobado y no aprobado.
     * @param {string} id El ID del ramo que se ha clickeado.
     */
    function toggleAprobacion(id) {
        const requisitosFaltantes = verificarRequisitos(id);
        
        if (aprobados.has(id)) {
            aprobados.delete(id);
        } else {
            if (requisitosFaltantes.length > 0) {
                const nombresRamosFaltantes = requisitosFaltantes.map(reqId => getRamo(reqId).nombre).join('\n - ');
                alert(`Para tomar este ramo, primero debes aprobar:\n - ${nombresRamosFaltantes}`);
                return;
            }
            aprobados.add(id);
        }

        localStorage.setItem('ramosAprobados', JSON.stringify([...aprobados]));
        actualizarUI();
    }

    /**
     * Actualiza toda la interfaz de usuario: clases de los ramos y contador de créditos.
     */
    function actualizarUI() {
        // Actualiza el estado visual de cada ramo
        for (const ramo of ramosData) {
            const ramoDiv = document.querySelector(`.ramo[data-id='${ramo.id}']`);
            if (!ramoDiv) continue;

            ramoDiv.classList.remove('aprobado', 'bloqueado');

            if (aprobados.has(ramo.id)) {
                ramoDiv.classList.add('aprobado');
            } else if (verificarRequisitos(ramo.id).length > 0) {
                ramoDiv.classList.add('bloqueado');
            }
        }

        // Actualiza el contador de créditos
        const creditosTotal = [...aprobados].reduce((total, id) => {
            const ramo = getRamo(id);
            return total + (ramo ? ramo.creditos : 0);
        }, 0);
        document.getElementById('creditos-aprobados').textContent = creditosTotal;
    }

    /**
     * Busca la información de un ramo por su ID.
     * @param {string} id El ID del ramo.
     * @returns {object|undefined} El objeto del ramo o undefined si no se encuentra.
     */
    function getRamo(id) {
        return ramosData.find(ramo => ramo.id === id);
    }

    /**
     * Verifica si los requisitos de un ramo están cumplidos.
     * @param {string} id El ID del ramo a verificar.
     * @returns {string[]} Una lista con los IDs de los requisitos no aprobados.
     */
    function verificarRequisitos(id) {
        const ramo = getRamo(id);
        if (!ramo || !ramo.requisitos) return [];
        return ramo.requisitos.filter(reqId => !aprobados.has(reqId));
    }

    // --- Inicialización ---
    dibujarMalla();
    actualizarUI();
});
