## Demonstration:

Now drag it onto your bookmarks, or create a bookmark and paste the code in the URL/location field. Enjoy!

["javascript: (
    function () {
        var elements = document.body.getElementsByTagName('*');
        var items = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.indexOf(`content: '🡐 this is net.art';font-weight: 600;font-size: inherit;text-decoration: underline !important;position: absolute;overflow: visible;height: 18px;cursor: pointer;padding: 2px 8px;border: 1px solid #F3F3F3;-moz-box-shadow: 0 0 0 1px #707070;-webkit-box-shadow: 0 0 0 1px #707070;box-shadow: 0 0 0 1px #707070;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;    background: -moz-linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#F2F2F2), color-stop(0.5,#EBEBEB),color-stop(0.51,#DDDDDD),color-stop(1,#CFCFCF));background: linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);font: normal 12px sans-serif;color: black;text-decoration: none;`) != -1) {
                items.push(elements[i]);
            }
        }

        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                items[i].innerHTML = '';
            }
        } else {
            document.body.innerHTML += `<style>*:after{content: '🡐 this is net.art';font-weight: 600;font-size: inherit;text-decoration: underline !important;position: absolute;overflow: visible;height: 18px;cursor: pointer;padding: 2px 8px;border: 1px solid #F3F3F3;-moz-box-shadow: 0 0 0 1px #707070;-webkit-box-shadow: 0 0 0 1px #707070;box-shadow: 0 0 0 1px #707070;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;    background: -moz-linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#F2F2F2), color-stop(0.5,#EBEBEB),color-stop(0.51,#DDDDDD),color-stop(1,#CFCFCF));background: linear-gradient(top, #F2F2F2 0%, #EBEBEB 50%, #DDDDDD 51%, #CFCFCF 100%);font: normal 12px sans-serif;color: black;text-decoration: none;}*:hover:after{padding: 2px 7px 3px 9px;border: 1px solid #73A7C4;border-bottom: 0;-moz-box-shadow: 0 0 0 1px #2C628B;-webkit-box-shadow: 0 0 0 1px #2C628B;box-shadow: 0 0 0 1px #2C628B;background: -moz-linear-gradient(top, #E5F4FC 0%, #C4E5F6 50%, #98D1EF 51%, #68B3DB 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0,#E5F4FC), color-stop(0.5,#C4E5F6),color-stop(0.51,#98D1EF),color-stop(1,#68B3DB));}</style>`;
        }
    }
)();"](http://google.com)

Now drag it onto your bookmarks, or create a bookmark and paste the code in the URL/location field. Enjoy!
