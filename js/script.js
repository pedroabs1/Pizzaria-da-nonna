//funções uteis
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const abrirModal = () => {
    seleciona('.pizzaWindowArea').style.opacity = 0;
    seleciona('.pizzaWindowArea').style.display = 'flex';
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.opacity = 1;
    }, 150);
};

const fecharModal = () => {
    //fechar janela modal
    // document.querySelector('.pizzaInfo--cancelButton').addEventListener('click', () => {
    //     document.querySelector('.pizzaWindowArea').style.display = 'none';
    // seleciona('.pizzaInfo--cancelButton').addEventListener('click', () => {
    //     seleciona('.pizzaWindowArea').style.display = 'none';
    // });

    // document.querySelector('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
    //     document.querySelector('.pizzaWindowArea').style.display = 'none';
    // seleciona('.pizzaInfo--cancelMobileButton').addEventListener('click', () => {
    //     seleciona('.pizzaWindowArea').style.display = 'none';
    // });

    seleciona('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        seleciona('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

botoesFechar = () => {
    selecionaTodos('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
        item.addEventListener('click', fecharModal);
    });
};

const preencheDadosPizzas = (pizzaItem, item) => {
    //preencher dados de cada pizza
    // pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    // pizzaItem.querySelector('.pizza-item--price').innerText = `R$ ${item.price.toFixed(2)}`;
    // pizzaItem.querySelector('.pizza-item--name').innerText = item.name;
    // pizzaItem.querySelector('.pizza-item--desc').innerText = item.description;

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerText = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerText = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerText = item.description;
};

const preencheDadosModal = (item) => {
    //preencher dados de cada pizza na modal
    // document.querySelector('.pizzaBig img').src = item.img;
    // document.querySelector('.pizzaInfo h1').innerText = item.name;
    // document.querySelector('.pizzaInfo--desc').innerText = item.description;
    // document.querySelector('.pizzaInfo--actualPrice').innerText = `R$ ${item.price.toFixed(2)}`;

    // seleciona('.pizzaBig img').src = item.img;
    // seleciona('.pizzaInfo h1').innerText = item.name;
    // seleciona('.pizzaInfo--desc').innerText = item.description;
    // seleciona('.pizzaInfo--actualPrice').innerText = `R$ ${item.price.toFixed(2)}`;

    seleciona('.pizzaBig img').src = item.img;
    seleciona('.pizzaInfo h1').innerText = item.name;
    seleciona('.pizzaInfo--desc').innerText = item.description;
    seleciona('.pizzaInfo--actualPrice').innerText = `R$ ${item.price.toFixed(2)}`;
};

//inicio do map json
pizzaJson.map((item, index) => {
    // console.log(item)

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    // console.log(pizzaItem)

    document.querySelector('.pizza-area').append(pizzaItem);

    preencheDadosPizzas(pizzaItem, item);

    //quando a pizza for clicada
    pizzaItem.querySelector('.pizza-item a').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicou na pizza');

        //abrir janela modal
        // seleciona ('.pizzaWindowArea').style.display = 'flex';
        abrirModal();

        preencheDadosModal(item);
    });

    botoesFechar();
});
