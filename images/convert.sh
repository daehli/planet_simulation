#! /bin/bash
# Converti tout les images .pgm en .png dans le même dossier courrant.
# Ensuite il supprime tout les images avec l'extension .pgm
# Pour compiler exécuter le programme
#
#   $ chmod +x convert.sh
#   # Permet de mettre le fichier en exécutable
#   $ ./convert.sh
#   # Converti les images
#
for img in *.jpg; do
    echo -e "$img\n"
    filename=${img%.*}
    convert "$filename.jpg" "$filename.png"
    rm "$img"
done
