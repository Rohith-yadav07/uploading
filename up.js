const form = document.getElementById('uploadForm');
        const fileInput = document.getElementById('fileInput');
        const fileList = document.getElementById('fileList');

        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const files = fileInput.files;
            if(files.length === 0) {
                alert('Please select at least one file.');
                
            }

            fileList.innerHTML = '';
            const list = document.createElement('ul');
            fileList.appendChild(list);

            for (let i = 0; i < files.length; i++) {
                const listItem = document.createElement('li');
                listItem.textContent = files[i].name;
                list.appendChild(listItem);
            }

        });