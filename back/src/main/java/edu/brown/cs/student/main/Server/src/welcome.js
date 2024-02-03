<head>
 
    <script>
        // Create new link Element
        let link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
 
        link.type = 'text/css';
 
        link.href = 'style.css';
 
        // Get HTML head element to append
        // link element to it
        document.getElementsByTagName('HEAD')[0].appendChild(link);
 
    </script>
</head>