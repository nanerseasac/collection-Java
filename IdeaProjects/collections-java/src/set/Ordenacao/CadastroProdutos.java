package set.Ordenacao;

import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

public class CadastroProdutos {

    private Set<Produto> produtoSet;

    public CadastroProdutos() {
        this.produtoSet = new HashSet<>();
    }

    public void adicionarProduto(long codigo,String nome, double preco, int quantidade) {
        produtoSet.add(new Produto(codigo,nome,preco,quantidade));
    }

    public Set<Produto> exibirProdutosPorNome() {
        Set<Produto> produtosPorNome = new TreeSet<>(produtoSet);
        return produtosPorNome;

    }

    public Set<Produto> exibirProdutosPorPreco() {
        Set<Produto> produtosPorPreco = new TreeSet<>(new ComparatorPorPreco());
        produtosPorPreco.addAll(produtoSet);
        return produtosPorPreco;
    }

    public void showAllProducts() {
        System.out.println(produtoSet);
    }

    public static void main(String[] args) {
        CadastroProdutos cadastroProdutos = new CadastroProdutos();
        cadastroProdutos.adicionarProduto(2134432,"Remedio",2.5,20);
        cadastroProdutos.adicionarProduto(2134432,"KKmediweo",90.1,20);
        cadastroProdutos.adicionarProduto(2134321,"Aemeo",250.3,20);
        cadastroProdutos.adicionarProduto(2133212,"Aedio",22.3,20);


        cadastroProdutos.showAllProducts();
        System.out.println(cadastroProdutos.exibirProdutosPorNome());
        System.out.println(cadastroProdutos.exibirProdutosPorPreco());


    }

}
