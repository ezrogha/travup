package com.travup;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.realm.react.RealmReactPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
// import cl.hasaezs.rndominantcolor.RNDominantColorPackage;
// import com.rncollapsingtoolbar.RNCollapsingToolbarPackage;
// import com.rnnestedscrollview.RNNestedScrollViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RealmReactPackage(),
          new RNGestureHandlerPackage(),
          new ImagePickerPackage(),
          new VectorIconsPackage()
          // new RNDominantColorPackage(),
          // new RNCollapsingToolbarPackage(),
          // new RNNestedScrollViewPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
