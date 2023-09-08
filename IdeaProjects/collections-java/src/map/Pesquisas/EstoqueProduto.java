package map.Pesquisas;

import java.util.HashMap;
import java.util.Map;

public class EstoqueProduto {

    private Map<Long, Produto> estoqueProdutosMap;

    public EstoqueProduto() {
        this.estoqueProdutosMap = new HashMap<>();
    }

    public void adicionarProduto(long cod, String nome, int quantidade, double preco){
        estoqueProdutosMap.put(cod, new Produto(nome,preco,quantidade));
    }

    public void exibirProdutos(){
        System.out.println(estoqueProdutosMap);
    }

    public double calculaValorTotalEstoque() {
        double valorTotalEstoque = 0d;
        if(!estoqueProdutosMap.isEmpty()) {
            for(Produto p: estoqueProdutosMap.values()) {
                valorTotalEstoque += p.getQuantidade() * p.getPreco();
            }
        }
        return valorTotalEstoque;
    }

    public Produto obterProdutoMaisCaro() {
        Produto produtoMaisCaro = null;
        double maiorPreco = Double.MIN_VALUE;

        if(!estoqueProdutosMap.isEmpty()) {
            for(Produto p: estoqueProdutosMap.values()) {
                if(p.getPreco() > maiorPreco) {
                    produtoMaisCaro = p;
                    maiorPreco = p.getPreco();
                }
            }
        }
        return produtoMaisCaro;
    }

    public static void main(String[] args) {
        EstoqueProduto estoqueProduto = new EstoqueProduto();

        estoqueProduto.adicionarProduto(2L,"Ren",10,2.5);
        estoqueProduto.adicionarProduto(3L,"LL",5,3.2);
        estoqueProduto.adicionarProduto(4L,"Nn",2,2.1);

        estoqueProduto.exibirProdutos();
        System.out.println(estoqueProduto.calculaValorTotalEstoque());
        System.out.println(estoqueProduto.obterProdutoMaisCaro());
    }
}

