package List.Pesquisas;

import java.util.ArrayList;
import java.util.List;

public class CatalogoLivros {

    private List<Livro> livroList;

    public CatalogoLivros() {
        this.livroList = new ArrayList<>();
    }

    public void adicionarLivro(String titulo, String autor, int anoPublicacao) {
        livroList.add(new Livro(titulo, autor, anoPublicacao));
    }

    public List<Livro> pesquisarPorAutor(String autor) {
        List<Livro> livrosPorAutor = new ArrayList<>();
        if(!livroList.isEmpty()) {
            for(Livro l : livroList) {
                if(l.getAutor().equalsIgnoreCase(autor)) {
                    livrosPorAutor.add(l);
                }
            }
        }
        return livrosPorAutor;
    }

    public List<Livro> pesquisarPorIntervaloAnos(int anoInicial, int anoFinal) {
        List<Livro> livroPorIntervaloAnos = new ArrayList<>();
        if(!livroList.isEmpty()) {
            for(Livro l : livroList) {
                if(l.getAnoPublicacao() >= anoInicial && l.getAnoPublicacao() <= anoFinal) {
                    livroPorIntervaloAnos.add(l);
                }
            }
        }
       return livroPorIntervaloAnos;
    }

    public Livro pesquisarPorTitulo(String titulo) {
        Livro livroPorTitulo = null;
        if(!livroList.isEmpty()) {
            for(Livro l : livroList) {
                if(l.getTitulo().equalsIgnoreCase(titulo)) {
                    livroPorTitulo = l;
                    break;
                }
            }
        }
        return livroPorTitulo;
    }

    public List<Livro> getAllBooks() {
        List<Livro> todosLivros = new ArrayList<>();
        for (Livro l : livroList) {
            todosLivros.add(l);
        }
        return todosLivros;
    }

    public static void main(String[] args) {
        CatalogoLivros catalogoLivros = new CatalogoLivros();

        catalogoLivros.adicionarLivro("Amor","Claudinha", 2010);
        catalogoLivros.adicionarLivro("Vida","Lucas", 2011);
        catalogoLivros.adicionarLivro("Yeah Right","Joji", 2015);
        catalogoLivros.adicionarLivro("Telekinesis","Travis Scott", 2023);
        catalogoLivros.adicionarLivro("Reminder","The Weeknd", 2021);

        System.out.println(catalogoLivros.pesquisarPorAutor("Lucas"));

        System.out.println(catalogoLivros.getAllBooks());
        System.out.println(catalogoLivros.pesquisarPorIntervaloAnos(2012, 2016));
    }
}
