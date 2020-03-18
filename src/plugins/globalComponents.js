import Badge from "@/components/bootstrap/Badge";
//import BaseAlert from "@/components/bootstrap/BaseAlert";
import BaseButton from "@/components/bootstrap/BaseButton";
//import BaseCheckbox from "@/components/bootstrap/BaseCheckbox";
import BaseInput from "@/components/bootstrap/BaseInput";
//import BasePagination from "@/components/bootstrap/BasePagination";
//import BaseProgress from "@/components/bootstrap/BaseProgress";
//import BaseRadio from "@/components/bootstrap/BaseRadio";
//import BaseSlider from "@/components/bootstrap/BaseSlider";
//import BaseSwitch from "@/components/bootstrap/BaseSwitch";
import Card from "@/components/bootstrap/Card";
import Icon from "@/components/bootstrap/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    //Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    //Vue.component(BaseCheckbox.name, BaseCheckbox);
    //Vue.component(BasePagination.name, BasePagination);
    //Vue.component(BaseProgress.name, BaseProgress);
    //Vue.component(BaseRadio.name, BaseRadio);
    //Vue.component(BaseSlider.name, BaseSlider);
    //Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
