import { I18nManager } from "react-native";
import * as RNLocalize from "react-native-localize";
import I18n, { Scope, TranslateOptions } from "i18n-js";

const SUPPORTED_LANGUAGES: { [tag: string]: object } = {
    en: require("../assets/i18n/en.json"),
    sv: require("../assets/i18n/sv.json"),
};

const FALLBACK = { languageTag: "en", isRTL: false };

function init() {
    const { languageTag, isRTL } =
        RNLocalize.findBestAvailableLanguage(Object.keys(SUPPORTED_LANGUAGES)) ||
        FALLBACK;

    // update layout direction
    I18nManager.forceRTL(isRTL);

    // set i18n-js config
    I18n.translations = { [languageTag]: SUPPORTED_LANGUAGES[languageTag] };
    I18n.locale = languageTag;

    I18n.HAS_INIT = true;
}

function translate(key: Scope, opt?: TranslateOptions): string {
    if (!I18n.HAS_INIT) return "<error: initialize i18n before using>";
    return I18n.translate(key, opt);
}

export { init, translate }