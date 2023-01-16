<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
        require_once './blocks/head.php';
    ?>
</head>
<body>

    <?php 
        require_once './blocks/header.php';
    ?>

    <div class="content">
        <?php 
            require_once './blocks/content/banner.php';

            require_once './blocks/content/service.php';

            require_once './blocks/content/introduce.php';

            require_once './blocks/content/news.php';

            require_once './blocks/content/recruit.php';

            require_once './blocks/content/places.php';

            require_once './blocks/content/partner.php';

        ?>

    </div>

    <?php 
        require_once './blocks/footer.php';
    ?>
    <script src="./assets/js/style.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.0.min.js">

    </script>
</body>

</html>
