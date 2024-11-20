# Penjelasan Source Code

## Login Page

![Tampilan Login](TampilanLogin.png)

Ketika aplikasi diakses, pengguna akan pertama kali melihat halaman login ini. Untuk melanjutkan, klik tombol "SIGN IN WITH GOOGLE".


```template
<!-- Button Sign In -->
                <ion-button @click="login" color="light">
                    <ion-icon slot="start" :icon="logoGoogle"></ion-icon>
                    <ion-label>Sign In with Google</ion-label>
                </ion-button>
```
```script
const login = async () => {
    await authStore.loginWithGoogle();
};
```

![Tampilan Loginn](TampilanLoginn.jpg)

Setelah klik tombol login, pilih akun Google yang ingin digunakan, lalu tekan "OK".

Berikut adalah Router. Jika login berhasil, pengguna akan diarahkan ke halaman Home Page, sedangkan jika gagal akan kembali ke halaman login.
```router/index.ts
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.path === '/login' && authStore.isAuth) {
    next('/home');
  } else if (to.meta.isAuth && !authStore.isAuth) {
    next('/login');
  } else {
    next();
  }
});
```

## Home Page

![Tampilan Home](TampilanHome.png)


Setelah berhasil login, pengguna akan langsung diarahkan ke Home Page. Halaman ini tidak memiliki konten tambahan.

Ini adalah kode dari tampilan Home Page
```template
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div>
      </div>
      <TabsMenu />
    </ion-content>

  </ion-page>
```
Untuk membuka halaman Profile Page, klik ikon Profile di bagian kanan bawah layar.

## Profile Page

![Tampilan Profile](TampilanProfile.jpg)

Pada halaman ini, pengguna dapat melihat foto profil, nama, dan email yang digunakan saat login.
```template
<!-- Avatar -->
            <div id="avatar-container">
                <ion-avatar>
                    <img alt="Avatar" :src="userPhoto" @error="handleImageError" />
                </ion-avatar>
            </div>

            <!-- Data Profile -->
            <ion-list>
                <ion-item>
                    <ion-input label="Nama" :value="user?.displayName" :readonly="true"></ion-input>
                </ion-item>

                <ion-item>
                    <ion-input label="Email" :value="user?.email" :readonly="true"></ion-input>
                </ion-item>
            </ion-list>
```

Ini adalah script untuk menampilkan data akun
```script
const userPhoto = ref(user.value?.photoURL || 'https://ionicframework.com/docs/img/demos/avatar.svg');

function handleImageError() {
    userPhoto.value = 'https://ionicframework.com/docs/img/demos/avatar.svg';
}
```

Jika tombol Log Out di pojok kanan atas ditekan, pengguna akan diarahkan kembali ke halaman login.
```template
                <!-- Logout Button -->
                <ion-button slot="end" fill="clear" @click="logout" style="--color: gray;">
                    <ion-icon slot="end" :icon="exit"></ion-icon>
                    <ion-label>Logout</ion-label>
                </ion-button>
```
```script
const logout = () => {
    authStore.logout();
};
```
