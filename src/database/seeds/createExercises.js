exports.seed = async function (knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      name: 'Incline barbell bench press',
      series: 4,
      repetitions: 12,
      group: 'Chest',
      demo: 'supino_inclinado_com_barra.gif',
      thumb: 'supino_inclinado_com_barra.png',
    },
    {
      name: 'Flat dumbbell fly',
      series: 3,
      repetitions: 12,
      group: 'Chest',
      demo: 'crucifixo_reto.gif',
      thumb: 'crucifixo_reto.png'
    },
    {
      name: 'Flat barbell bench press',
      series: 3,
      repetitions: 12,
      group: 'Chest',
      demo: 'supino_reto_com_barra.gif',
      thumb: 'supino_reto_com_barra.png'
    },
    {
      name: 'Lying French press with dumbbells',
      series: 3,
      repetitions: 12,
      group: 'Triceps',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    },
    {
      name: 'Cable cross-over',
      series: 4,
      repetitions: 12,
      group: 'Triceps',
      demo: 'corda_cross.gif',
      thumb: 'corda_cross.png'
    },
    {
      name: 'Barbell cross-over',
      series: 3,
      repetitions: 12,
      group: 'Triceps',
      demo: 'barra_cross.gif',
      thumb: 'barra_cross.png'
    },
    {
      name: 'Forehead triceps extension',
      series: 4,
      repetitions: 12,
      group: 'Triceps',
      demo: 'triceps_testa.gif',
      thumb: 'triceps_testa.png'
    },
    {
      name: 'Deadlift',
      series: 3,
      repetitions: 12,
      group: 'Back',
      demo: 'levantamento_terra.gif',
      thumb: 'levantamento_terra.png'
    },
    {
      name: 'Front pulldown',
      series: 3,
      repetitions: 12,
      group: 'Back',
      demo: 'pulley_frontal.gif',
      thumb: 'pulley_frontal.png'
    },
    {
      name: 'Lat pulldown',
      series: 4,
      repetitions: 12,
      group: 'Back',
      demo: 'pulley_atras.gif',
      thumb: 'pulley_atras.png'
    },
    {
      name: 'Seated cable row',
      series: 4,
      repetitions: 12,
      group: 'Back',
      demo: 'remada_baixa.gif',
      thumb: 'remada_baixa.png'
    },
    {
      name: 'Bent-over row',
      series: 4,
      repetitions: 12,
      group: 'Back',
      demo: 'serrote.gif',
      thumb: 'serrote.png'
    },
    {
      name: 'Alternating incline dumbbell curl',
      series: 4,
      repetitions: 12,
      group: 'Biceps',
      demo: 'rosca_alternada_com_banco_inclinado.gif',
      thumb: 'rosca_alternada_com_banco_inclinado.png'
    },
    {
      name: 'Reverse grip barbell curl',
      series: 4,
      repetitions: 12,
      group: 'Biceps',
      demo: 'rosca_scott_barra_w.gif',
      thumb: 'rosca_scott_barra_w.png'
    },
    {
      name: 'Barbell bicep curl',
      series: 3,
      repetitions: 12,
      group: 'Biceps',
      demo: 'rosca_direta_barra_reta.gif',
      thumb: 'rosca_direta_barra_reta.png'
    },
    {
      name: 'Standing hammer curl',
      series: 3,
      repetitions: 12,
      group: 'Biceps',
      demo: 'martelo_em_pe.gif',
      thumb: 'martelo_em_pe.png'
    },
    {
      name: 'Wrist curl',
      series: 4,
      repetitions: 12,
      group: 'Forearm',
      demo: 'rosca_punho.gif',
      thumb: 'rosca_punho.png'
    },
    {
      name: '45-degree leg press',
      series: 4,
      repetitions: 12,
      group: 'Legs',
      demo: 'leg_press_45_graus.gif',
      thumb: 'leg_press_45_graus.png'
    },
    {
      name: 'Leg extension',
      series: 4,
      repetitions: 12,
      group: 'Legs',
      demo: 'extensor_de_pernas.gif',
      thumb: 'extensor_de_pernas.png'
    },
    {
      name: 'Hip abduction machine',
      series: 4,
      repetitions: 12,
      group: 'Legss',
      demo: 'abdutora.gif',
      thumb: 'abdutora.png'
    },
    {
      name: 'Stiff-legged deadlift',
      series: 4,
      repetitions: 12,
      group: 'Legss',
      demo: 'stiff.gif',
      thumb: 'stiff.png',
    },
    {
      name: 'Neck press',
      series: 4,
      repetitions: 10,
      group: 'Shoulder',
      demo: 'neck-press.gif',
      thumb: 'neck-press.png'
    },
    {
      name: 'Machine shoulder press',
      series: 3,
      repetitions: 10,
      group: 'Shoulder',
      demo: 'desenvolvimento_maquina.gif',
      thumb: 'desenvolvimento_maquina.png'
    },
    {
      name: 'Seated dumbbell lateral raise',
      series: 4,
      repetitions: 10,
      group: 'Shoulder',
      demo: 'elevacao_lateral_com_halteres_sentado.gif',
      thumb: 'elevacao_lateral_com_halteres_sentado.png'
    },
    {
      name: 'Dumbbell shrug',
      series: 4,
      repetitions: 10,
      group: 'Trapezius',
      demo: 'encolhimento_com_halteres.gif',
      thumb: 'encolhimento_com_halteres.png'
    },
    {
      name: 'Barbell shrug',
      series: 4,
      repetitions: 10,
      group: 'Trapezius',
      demo: 'encolhimento_com_barra.gif',
      thumb: 'encolhimento_com_barra.png'
    }
  ]);
};