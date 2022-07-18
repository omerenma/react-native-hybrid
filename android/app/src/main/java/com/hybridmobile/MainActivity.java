package com.hybridmobile;
import android.os.Bundle;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;
import com.facebook.react.bridge.Arguments;
import javax.annotation.Nullable;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "hybridmobile";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }
  }
  @Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
}

// public class MyTaskService extends HeadlessJsTaskService {

//   @Override
//   protected @Nullable HeadlessJsTaskConfig getTaskConfig(Intent intent) {
//     Bundle extras = intent.getExtras();
//     if (extras != null) {
//       return new HeadlessJsTaskConfig(
//           "SomeTaskName",
//           Arguments.fromBundle(extras),
//           5000, // timeout for the task
//           false // optional: defines whether or not  the task is allowed in foreground. Default is false
//         );
//     }
//     return null;
//   }
// }