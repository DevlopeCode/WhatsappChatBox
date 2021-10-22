document.getElementById("update1").style.visibility = "hidden";
document.getElementById("update0").style.visibility = "hidden";
var UserWork = [], ShowMen = [];
function WelCome() {
    var DataHolder = [];
    var obj = {
        SenderData: [],
        ReciverData: []
    }
    DataHolder.push(obj);
    localStorage.setItem('Whatsapp', JSON.stringify(DataHolder))
}
function SendMsg(x) {
    UserWork = JSON.parse(localStorage.getItem('Whatsapp'));
    UserWork.forEach(element => {
        if (x == '1') {
            if (document.getElementById('Sender_data').length != 0) {
                element.ReciverData.push('<br>');
                element.SenderData.push(document.getElementById('Sender_data').value);
                localStorage.setItem('Whatsapp', JSON.stringify(UserWork));
                showMsg();
            }
        }
        if (x == '0') {
            if (document.getElementById('Reciver_data').length != 0) {
                element.SenderData.push('<br>');
                element.ReciverData.push(document.getElementById('Reciver_data').value);
                localStorage.setItem('Whatsapp', JSON.stringify(UserWork));
                showMsg();
            } 
        }
    });
    location.reload();
}
if ('Whatsapp' in localStorage) {
    showMsg();
} else {
    WelCome();
}
function showMsg() {
    ShowMen = JSON.parse(localStorage.getItem('Whatsapp'));
    ShowMen.forEach((e) => {
        document.getElementById('massages1').innerHTML = ' '
        document.getElementById('massages0').innerHTML = ' '
        document.getElementById('Msg1').innerHTML = ` `;
        document.getElementById('Msg0').innerHTML = ` `;
        for (let i = 0; i < e.SenderData.length; i++) {
           if( e.SenderData[i] == `<br>`){
                           document.getElementById('massages0').innerHTML += `<li><span class="text_msg">${e.SenderData[i]}</span></li><br>`;
            document.getElementById('massages1').innerHTML += `<li><span class="text_msg">${e.SenderData[i]}</span></li><br>`;
           }else{
            document.getElementById('massages0').innerHTML += `<li><span class="text_msg">${e.SenderData[i]}</span><span class="jai"><button type="submit" class="yalgar" onclick="DelteMsg(${i},1)">Del</button><button type="submit" class="yalgarho" onclick="EditMsg(${i},1,0)">Edi</button></span></li><br>`;
            document.getElementById('massages1').innerHTML += `<li><span class="text_msg">${e.SenderData[i]}</span><span class="jai"><button type="submit" class="yalgar" onclick="DelteMsg(${i},1)">Del</button><button type="submit" class="yalgarho"  onclick="EditMsg(${i},1,0)">Edi</button></span></li><br>`;
           }

        } for (let i = 0; i < e.ReciverData.length; i++) {
           if( e.ReciverData[i] == `<br>`){
            document.getElementById('Msg1').innerHTML += `<li><span class="text_msg">${e.ReciverData[i]} </span></li><br>`;
            document.getElementById('Msg0').innerHTML += `<li><span class="text_msg">${e.ReciverData[i]}</span></li><br>`;
           }else{
            document.getElementById('Msg1').innerHTML += `<li><span class="text_msg">${e.ReciverData[i]} </span><span class="jai"><button type="submit"  class="yalgar" onclick="DelteMsg(${i},0)">Del</button><button type="submit"  class="yalgarho"  onclick="EditMsg(${i},0,0)">Edi</button></span></li><br>`;
            document.getElementById('Msg0').innerHTML += `<li><span class="text_msg">${e.ReciverData[i]}</span><span class="jai"><button type="submit" class="yalgar" onclick="DelteMsg(${i},0)">Del</button><button type="submit"  class="yalgarho" onclick="EditMsg(${i},0,0)">Edi</button></span></li><br>`;
           }
            
        }
    })
}
function DelteMsg(index, flag) {
    console.log(index);
    ShowMen.forEach((e) => {
        if (flag == 0) {
            alert('Delete reciveddata');
            e.ReciverData.splice(index, 1);
            localStorage.setItem('Whatsapp', JSON.stringify(ShowMen));
            showMsg();
        }
        if (flag == 1) {
            alert('delete senddata');
            e.SenderData.splice(index, 1);
            localStorage.setItem('Whatsapp', JSON.stringify(ShowMen));
            showMsg();
        }
    });
}
function update0(index, flag, status) {
    if (status == 0) {
        EditMsg(index, flag, 1)
    }
}
function update1(index, flag, status) {
    if (status == 0) {
        EditMsg(index, flag, 1)
    }
}
function EditMsg(index, flag, status) {
    ShowMen.forEach((e) => {
        if (flag == 0) {
            if (status == 0) {
                document.getElementById("send0").style.visibility = "hidden";
                document.getElementById("update0").style.visibility = "visible";
                alert('Edit reciveddata');
                document.getElementById('Reciver_data').value = ` ${e.ReciverData[index]} `;
                document.getElementById('update0').setAttribute('onclick', `update0(${index},${flag},${status})`)
            } else {
                e.ReciverData.splice(index, 1, document.getElementById('Reciver_data').value);
                localStorage.setItem('Whatsapp', JSON.stringify(ShowMen));
                document.getElementById("send0").style.visibility = "visible";
                showMsg();
                location.reload();
            }
        }
        if (flag == 1) {
            if (status == 0) {
                document.getElementById("send1").style.visibility = "hidden";
                document.getElementById("update1").style.visibility = "visible";
                alert('Edit senddata');
                document.getElementById('Sender_data').value = ` ${e.SenderData[index]} `;
                document.getElementById('update1').setAttribute('onclick', `update1(${index},${flag},${status})`)
            } else {
                e.SenderData.splice(index, 1, document.getElementById('Sender_data').value);

                localStorage.setItem('Whatsapp', JSON.stringify(ShowMen));
                document.getElementById("send0").style.visibility = "visible";
                showMsg();
                location.reload();
            }
        }
    }); 
}
