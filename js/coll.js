const scriptURL = 'https://script.google.com/macros/s/AKfycbyfwwOHUnwrlq_xUsruSqyiv-31SZkoaXKynjkip_Ul6b9uY-3PqOlgEcDr8frxDg9Wgw/exec'
              const form = document.forms['cform']
              
              form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thank you! your form is submitted successfully." ))
                .then(() => {  window.location.reload(); })
                .catch(error => console.error('Error!', error.message))
              })
