package List.Operacoes_Basicas;

import java.util.ArrayList;
import java.util.List;

public class Lista_Tarefa {

    private List<Tarefa> tarefaList;

    public Lista_Tarefa() {
        this.tarefaList = new ArrayList<>();
    }

    public void adicionarTarefa(String descricao) {
        tarefaList.add(new Tarefa(descricao));
    }

    public void removerTarefa(String descricao) {
        List<Tarefa> tarefasParaRemover = new ArrayList<>();

        for(Tarefa t: tarefaList) {
            if(t.getDescricao().equalsIgnoreCase(descricao)) {
                tarefasParaRemover.add(t);
            }
        }
        tarefaList.removeAll(tarefasParaRemover);
    }

    public int obterNumeroTotalDeTarefas(){
        return tarefaList.size();
    }

    public void obterDescricaoDasTarefas(){
        System.out.println(tarefaList);
    }

    public static void main(String[] args) {
        Lista_Tarefa listaTarefa = new Lista_Tarefa();

        listaTarefa.adicionarTarefa("Kkk to rindo man");
        listaTarefa.adicionarTarefa("i hate you i love you");
        listaTarefa.obterDescricaoDasTarefas();
        System.out.println(listaTarefa.obterNumeroTotalDeTarefas());
    }
}
