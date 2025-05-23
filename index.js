// Fungsi yang sudah Anda buat
        function manggil() {
            // Mainkan suara menyeramkan
            const sound = document.getElementById('screamSound');
            sound.currentTime = 0;
            sound.play();
            
            // Tampilkan efek visual
            document.getElementById('sound-wave').style.animation = 'soundWave 0.5s linear infinite';
            document.body.style.background = 'linear-gradient(135deg, #300000, #000)';
            
            const baru = document.createElement('div');
            baru.className = 'baru';
            baru.id = 'baru';
            baru.innerHTML = `<img src="lucu.jpg" alt="" width="100%" height="100%"><br>
            <button onclick="hapus()">Cepat Tutup!</button>`;
            document.body.appendChild(baru);
            
            // Tambahkan efek hantu acak
            createRandomGhosts();
            
            let inter = 5;
            let intervalId = setInterval(function() {
                for(let i = 0; i < inter; i++) {
                    console.log(i);
                    if(i === 4) {
                        clearInterval(intervalId);
                        // Tidak langsung dihapus, biarkan user yang menutup
                    }
                }
            }, 1000);
            
            return baru;
        }
        
        function hapus() {
            const baru = document.getElementById('baru');
            if (baru) {
                baru.remove();
            }
            // Kembalikan tampilan normal
            document.body.style.background = '#000';
            document.getElementById('sound-wave').style.animation = 'none';
        }
        
        // Fungsi tambahan untuk efek hantu
        function createRandomGhosts() {
            const ghosts = ['👻', '💀', '👹', '👺', '🕷️', '🕸️', '🧟', '🧛'];
            
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const ghost = document.createElement('div');
                    ghost.className = 'ghost';
                    ghost.textContent = ghosts[Math.floor(Math.random() * ghosts.length)];
                    ghost.style.left = Math.random() * 100 + 'vw';
                    ghost.style.top = Math.random() * 100 + 'vh';
                    ghost.style.fontSize = (Math.random() * 30 + 20) + 'px';
                    ghost.style.animationDelay = (Math.random() * 15) + 's';
                    document.body.appendChild(ghost);
                    
                    // Hapus setelah animasi selesai
                    setTimeout(() => {
                        ghost.remove();
                    }, 15000);
                }, i * 1500);
            }
        }