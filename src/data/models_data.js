/**
 * Fairy Models Agency - 全キャスト＆ニュース統一マスターデータ (assets/js/models_data.js)
 *
 * 【運用ルール】
 * 1. 上から「古い順 → 下に行くほど最新」の並び（NEW ARRIVAL 時は下から逆順で表示）
 * 2. 新人が入ったら ALL_CASTS_DATA の「一番下」に1行追加する（joinDate を入れるとNEWSにも自動掲載）
 * 3. isPickup: true → トップページ（index.html）の「Selected Casts」に表示
 * 4. isNew: true    → モデル一覧とNEWSの両方に「NEW」バッジを自動表示
 * 5. 写真更新やサイト開設など「モデル加入以外のInfo」は、下部の INFO_NEWS_DATA に追加する
 */
/**
 * Fairy Models Agency - 全キャスト＆ニュース統一マスターデータ (src/data/models_data.js)
 */

const ALL_CASTS_DATA = [
    // ==========================================
    // 初期メンバー（2026.09.15〜10.23以前）
    // ==========================================
    { category: "woman", gender: "woman", name: "Isa", kana: "イサ", size: "171 / 83 / 60 / 83", shoes: "24.5", img: "./assets/models_all_image/isa/photo_1.webp", link: "./models/models_all/isa.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "woman", gender: "woman", name: "Hinata", kana: "ヒナタ", size: "167 / 76 / 62 / 81.5", shoes: "24.5", img: "./assets/models_all_image/hinata/photo_1.webp", link: "./models/models_all/hinata.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Jojo", kana: "ジョジョ", size: "183 / 97 / 79 / 95", shoes: "29", img: "./assets/models_all_image/jojo/photo_1.webp", link: "./models/models_all/jojo.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Ivan R", kana: "イワン", size: "168 / 87 / 72 / 84", shoes: "24.5", img: "./assets/models_all_image/ivan_r/photo_1.webp", link: "./models/models_all/ivan_r.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Tom Constantine", kana: "トムコンスタンタイン", size: "175 / 100 / 80 / 94", shoes: "28", img: "./assets/models_all_image/tom_constantine/photo_2.webp", link: "./models/models_all/tom_constantine.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Taiyo", kana: "タイヨウ", size: "169 / 81 / 66 / 87", shoes: "25.5", img: "./assets/models_all_image/taiyo/photo_1.webp", link: "./models/models_all/taiyo.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Aurelien", kana: "オレリアン", size: "177 / 100 / 76 / 88", shoes: "27.5", img: "./assets/models_all_image/aurelien/photo_1.webp", link: "./models/models_all/aurelien.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Richard Wilson", kana: "リチャード ウイルソン", size: "183 / 96 / 95 / 101", shoes: "28.5", img: "./assets/models_all_image/richard_wilson/photo_1.webp", link: "./models/models_all/richard_wilson.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Alfredo", kana: "アルフレッド", size: "179 / 99 / 92 / 82", shoes: "28.5", img: "./assets/models_all_image/alfredo/photo_1.webp", link: "./models/models_all/alfredo.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Julien J", kana: "ジュリアン", size: "177 / 98 / 75 / 95", shoes: "27.5", img: "./assets/models_all_image/julien_j/photo_1.webp", link: "./models/models_all/julien_j.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "航波", kana: "コナ", size: "182 / 99 / 78 / 100", shoes: "27.5", img: "./assets/models_all_image/koha/photo_1.webp", link: "./models/models_all/koha.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Ryo", kana: "リョウ", size: "182 / 96 / 80 / 97", shoes: "27.5", img: "./assets/models_all_image/ryo/photo_1.webp", link: "./models/models_all/ryo.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "So", kana: "ソウ", size: "182 / 83 / 67 / 84", shoes: "27.5", img: "./assets/models_all_image/so/photo_1.webp", link: "./models/models_all/so.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Tyler T", kana: "タイラー", size: "186 / 99 / 80 / 98", shoes: "29", img: "./assets/models_all_image/tyler_t/photo_1.webp", link: "./models/models_all/tyler_t.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Fonda Jeremy", kana: "フォンダ ジェレミー", size: "181 / 101 / 82 / 95", shoes: "29.5", img: "./assets/models_all_image/jeremy_fonda/photo_1.webp", link: "./models/models_all/jeremy_fonda.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Rafael", kana: "ラファエル", size: "174 / 80 / 65 / 80", shoes: "26.5", img: "./assets/models_all_image/rafael/photo_1.webp", link: "./models/models_all/rafael.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Amir", kana: "アミール", size: "181 / 96 / 79 / 98", shoes: "28", img: "./assets/models_all_image/amir/photo_1.webp", link: "./models/models_all/amir.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Ash", kana: "アッシュ", size: "180 / 93 / 76 / 86", shoes: "26.5", img: "./assets/models_all_image/ash/photo_1.webp", link: "./models/models_all/ash.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Ben MW", kana: "ベン", size: "180 / 91 / 71 / 92", shoes: "27.5", img: "./assets/models_all_image/ben_mw/photo_1.webp", link: "./models/models_all/ben_mw.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Christophe", kana: "クリストフ", size: "183 / 109 / 86 / 106", shoes: "27.5", img: "./assets/models_all_image/christophe/photo_1.webp", link: "./models/models_all/christophe.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Steve Wiley", kana: "スティーブ ワイリー", size: "181 / 104 / 90 / 102", shoes: "28.5", img: "./assets/models_all_image/steve_wiley/photo_1.webp", link: "./models/models_all/steve_wiley.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "man", gender: "man", name: "Johannes", kana: "ヨハネス", size: "186 / 96 / 80 / 94", shoes: "27.5", img: "./assets/models_all_image/johannes/photo_1.webp", link: "./models/models_all/johannes.html", isPickup: false, isNew: false, joinDate: "" },
    { category: "direct_booking", gender: "woman", name: "sayuri", kana: "サユリ", size: "163 / 78 / 63 / 79", shoes: "23.5", img: "./assets/direct_booking_image/sayuri/photo_1.webp", link: "./direct_booking/sayuri.html", isPickup: false, isNew: false, joinDate: "" },

    // ==========================================
    // 2026.10.23 加入（トップページ PICKUP WOMAN）
    // ==========================================
    { category: "woman", gender: "woman", name: "Fadile", kana: "ファディレ", size: "160 / 82 / 62 / 90", shoes: "24", img: "./assets/models_image/fadile/photo_1.webp", gallery: ["./assets/models_image/fadile/photo_2.webp", "./assets/models_image/fadile/photo_3.webp"], link: "./models/fadile.html", isPickup: true, isNew: false, joinDate: "2026-10-23" },
    { category: "woman", gender: "woman", name: "Alina L", kana: "アリーナ", size: "164 / 82 / 60 / 86", shoes: "23.5", img: "./assets/models_image/alina_l/photo_1.webp", gallery: ["./assets/models_image/alina_l/photo_2.webp", "./assets/models_image/alina_l/photo_3.webp"], link: "./models/alina_l.html", isPickup: true, isNew: false, joinDate: "2026-10-23" },
    { category: "woman", gender: "woman", name: "Yumika M", kana: "ユミカ", size: "170 / 79 / 67 / 85", shoes: "24.5", img: "./assets/models_image/yumika_m/photo_1.webp", gallery: ["./assets/models_image/yumika_m/photo_2.webp", "./assets/models_image/yumika_m/photo_3.webp"], link: "./models/yumika_m.html", isPickup: true, isNew: false, joinDate: "2026-10-23" },

    // ==========================================
    // 2026.10.28 加入（トップページ PICKUP）
    // ==========================================
    { category: "woman", gender: "woman", name: "TAKAKO", kana: "タカコ", size: "171 / 82 / 64 / 89", shoes: "25", img: "./assets/models_image/takako/photo_1.webp", gallery: ["./assets/models_image/takako/photo_2.webp", "./assets/models_image/takako/photo_3.webp"], link: "./models/takako.html", isPickup: true, isNew: false, joinDate: "2026-10-28" },
    { category: "man", gender: "man", name: "Bhuiyan", kana: "ブイヤン", size: "180 / 90 / 73 / 88", shoes: "27.5", img: "./assets/models_image/bhuiyan/photo_1.webp", gallery: ["./assets/models_image/bhuiyan/photo_2.webp", "./assets/models_image/bhuiyan/photo_3.webp"], link: "./models/bhuiyan.html", isPickup: true, isNew: false, joinDate: "2026-10-28" },
    { category: "man", gender: "man", name: "ALEX", kana: "アレックス", size: "180 / 96 / 78 / 95", shoes: "27", img: "./assets/models_image/alex/photo_1.webp", gallery: ["./assets/models_image/alex/photo_2.webp", "./assets/models_image/alex/photo_3.webp"], link: "./models/alex.html", isPickup: true, isNew: false, joinDate: "2026-10-28" },
    { category: "man", gender: "man", name: "Kou", kana: "ナカイ コウ", size: "181 / 101.5 / 78 / 101", shoes: "27.5", img: "./assets/models_image/kou/photo_1.webp", link: "./models/kou.html", isPickup: true, isNew: false, joinDate: "2026-10-28" },

    // ==========================================
    // 2026.11.02 加入
    // ==========================================
    { category: "woman", gender: "woman", name: "Angela Nile", kana: "アンジェラ ナイル", size: "172 / 85 / 69 / 95", shoes: "26", img: "./assets/models_all_image/angela_nile/photo_1.webp", link: "./models/models_all/angela_nile.html", isPickup: false, isNew: false, joinDate: "2026-11-02" },
    { category: "artist", gender: "woman", name: "齊藤英里", kana: "サイトウエリ", size: "160 / 76 / 58 / 81", shoes: "23.5", img: "./assets/artists_image/eri_saito/photo_1.webp", link: "./artists/eri_saito.html", isPickup: false, isNew: false, joinDate: "2026-11-02" },
    { category: "artist", gender: "woman", name: "VIVIAN", kana: "ヴィヴィアン", size: "173 / 94 / 74 / 95", shoes: "25", img: "./assets/artists_image/vivian/photo_1.webp", link: "./artists/vivian.html", isPickup: false, isNew: false, joinDate: "2026-11-02" },
    { category: "artist", gender: "woman", name: "KEIKO", kana: "ケイコ", size: "180 / 81 / 66 / 91", shoes: "26.5", img: "./assets/artists_image/keiko/photo_1.webp", link: "./artists/keiko.html", isPickup: false, isNew: false, joinDate: "2026-11-02" },

    // ==========================================
    // 2026.11.04 加入
    // ==========================================
    { category: "woman", gender: "woman", name: "Aga", kana: "アガ", size: "161 / 75 / 59 / 85", shoes: "24", img: "./assets/models_all_image/aga/photo_1.webp", link: "./models/models_all/aga.html", isPickup: false, isNew: false, joinDate: "2026-11-04" },
    { category: "woman", gender: "woman", name: "Maritza", kana: "マリッア", size: "160 / 82 / 63 / 86", shoes: "", img: "./assets/models_all_image/maritza/photo_1.webp", link: "./models/models_all/maritza.html", isPickup: false, isNew: false, joinDate: "2026-11-04" },

    // ==========================================
    // 2026.11.06 加入
    // ==========================================
    { category: "woman", gender: "woman", name: "KiLi", kana: "キリ", size: "160 / 86 / 62 / 86", shoes: "23.5", img: "./assets/models_all_image/kili/photo_1.webp", link: "./models/models_all/kili.html", isPickup: false, isNew: false, joinDate: "2026-11-06" },
    { category: "woman", gender: "woman", name: "Tania Pinkus", kana: "タニア", size: "163 / 97 / 73 / 98", shoes: "23.5", img: "./assets/models_all_image/tania_pinkus/photo_1.webp", link: "./models/models_all/tania_pinkus.html", isPickup: false, isNew: false, joinDate: "2026-11-06" },
    { category: "woman", gender: "woman", name: "クレオ由貴", kana: "クレオ ユキ", size: "166 / 80 / 57 / 84", shoes: "24.5", img: "./assets/models_all_image/creo_yuki/photo_1.webp", link: "./models/models_all/creo_yuki.html", isPickup: false, isNew: false, joinDate: "2026-11-06" },

    // ==========================================
    // 2026.11.09 加入
    // ==========================================
    { category: "woman", gender: "woman", name: "Anni", kana: "アンニ", size: "161 / 78 / 59 / 85", shoes: "23", img: "./assets/models_all_image/anni/photo_1.webp", link: "./models/models_all/anni.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "woman", gender: "woman", name: "Michelle", kana: "ミシエル", size: "160 / 82 / 65 / 88", shoes: "25", img: "./assets/models_all_image/michelle/photo_1.webp", link: "./models/models_all/michelle.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "woman", gender: "woman", name: "Kayty", kana: "ケイティ", size: "168 / 88 / 64 / 98", shoes: "25", img: "./assets/models_all_image/kayty/photo_1.webp", link: "./models/models_all/kayty.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "woman", gender: "woman", name: "Natali W", kana: "ナタリ", size: "173 / 86 / 67 / 93", shoes: "25", img: "./assets/models_all_image/natali_w/photo_1.webp", link: "./models/models_all/natali_w.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "woman", gender: "woman", name: "KIARA", kana: "キアラ", size: "175 / 86 / 62 / 92", shoes: "25.5", img: "./assets/models_all_image/kiara/photo_1.webp", link: "./models/models_all/kiara.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Leigh", kana: "リー", size: "178 / 112 / 85 / 110", shoes: "26.5", img: "./assets/models_all_image/leigh/photo_1.webp", link: "./models/models_all/leigh.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Paolo Andrea Di Pietro", kana: "パオロ", size: "188 / 120 / 96 / 112", shoes: "32", img: "./assets/models_all_image/paolo/photo_1.webp", link: "./models/models_all/paolo.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Niclas E", kana: "ニクラス", size: "171 / 96 / 86 / 99", shoes: "25.5", img: "./assets/models_all_image/niclas_e/photo_1.webp", link: "./models/models_all/niclas_e.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Regan W", kana: "リーガン", size: "179 / 98 / 92 / 94", shoes: "26", img: "./assets/models_all_image/regan_w/photo_1.webp", link: "./models/models_all/regan_w.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Jordy Miwa", kana: "ジョルディ ミワ", size: "180 / 88 / 75 / 88", shoes: "28", img: "./assets/models_all_image/jordy_miwa/photo_1.webp", link: "./models/models_all/jordy_miwa.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "HD", kana: "エイチディ", size: "180 / 95 / 79 / 107", shoes: "27.5", img: "./assets/models_all_image/hd/photo_1.webp", link: "./models/models_all/hd.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Gaz", kana: "ギャズ", size: "184 / 94 / 80 / 94", shoes: "26.5", img: "./assets/models_all_image/gaz/photo_1.webp", link: "./models/models_all/gaz.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Akira", kana: "アキラ", size: "173 / 94 / 82 / 100", shoes: "27.5", img: "./assets/models_all_image/akira/photo_1.webp", link: "./models/models_all/akira.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },
    { category: "man", gender: "man", name: "Dennis Falt", kana: "デニス フォルト", size: "174 / 96 / 90 / 96", shoes: "27.5", img: "./assets/models_all_image/dennis_falt/photo_1.webp", link: "./models/models_all/dennis_falt.html", isPickup: false, isNew: true, joinDate: "2026-11-09" },

    // ==========================================
    // 2026.11.12 加入
    // ==========================================
    { category: "woman", gender: "woman", name: "國立 華蓮", kana: "コクリュウ カレン", size: "163 / 88 / 63 / 90", shoes: "25.5", img: "./assets/models_all_image/karen_kokuryu/photo_1.webp", link: "./models/models_all/karen_kokuryu.html", isPickup: false, isNew: true, joinDate: "2026-11-12" },
    { category: "woman", gender: "woman", name: "MARIA R", kana: "マリア", size: "169 / 88 / 59 / 90", shoes: "24.5", img: "./assets/models_all_image/maria_r/photo_1.webp", link: "./models/models_all/maria_r.html", isPickup: false, isNew: true, joinDate: "2026-11-12" },

    // ==========================================
    // 2026.11.17 加入（Excel追加 16名・NEWバッジ対象）
    // ==========================================
    { category: "woman", gender: "woman", name: "Ako", kana: "アコ", size: "160 / 79 / 64 / 87", shoes: "24.5", img: "./assets/models_all_image/ako/photo_1.webp", link: "./models/models_all/ako.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "Bunshiri", kana: "ブンシリ", size: "172 / 99 / 90 / 92", shoes: "26.5", img: "./assets/models_all_image/bunshiri/photo_1.webp", link: "./models/models_all/bunshiri.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Karin", kana: "カリン", size: "- / 81 / 62 / 88", shoes: "24", img: "./assets/models_all_image/karin/photo_1.webp", link: "./models/models_all/karin.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "Kouri", kana: "コウリ", size: "180.5 / 95 / 75 / 96", shoes: "27", img: "./assets/models_all_image/kouri/photo_1.webp", link: "./models/models_all/kouri.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Nina Neves", kana: "ニーナ ネベス", size: "155 / 78 / 62 / 90", shoes: "23.5", img: "./assets/models_all_image/nina_neves/photo_1.webp", link: "./models/models_all/nina_neves.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "ALBERTO", kana: "アルベルト", size: "175 / 95 / 90 / 94", shoes: "29", img: "./assets/models_all_image/alberto/photo_1.webp", link: "./models/models_all/alberto.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Dana Levin", kana: "ダナレビン", size: "174 / 77 / 61 / 88", shoes: "26", img: "./assets/models_all_image/dana_levin/photo_1.webp", link: "./models/models_all/dana_levin.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Maria", kana: "マリア", size: "156 / 79 / 61 / 81", shoes: "23.5", img: "./assets/models_all_image/maria/photo_1.webp", link: "./models/models_all/maria.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "Sei", kana: "セイ", size: "181 / 98 / 82 / 95", shoes: "28.5", img: "./assets/models_all_image/sei/photo_1.webp", link: "./models/models_all/sei.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "Oliver Scott", kana: "オリバースコット", size: "181 / 92 / 79 / 83", shoes: "26.5", img: "./assets/models_all_image/oliver_scott/photo_1.webp", link: "./models/models_all/oliver_scott.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "Manu", kana: "マヌ", size: "178 / 100 / 89 / 101", shoes: "26.5", img: "./assets/models_all_image/manu/photo_1.webp", link: "./models/models_all/manu.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
   { category: "man", gender: "man", name: "Brandon R", kana: "ブランドン", size: "167 / 84 / 73 / 87", shoes: "26.5", img: "./assets/models_all_image/brandon_r/photo_1.webp", link: "./models/models_all/brandon_r.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Vivi Conomi", kana: "ヴィヴィ コノミ", size: "158 / 80 / 61 / 80", shoes: "23", img: "./assets/models_all_image/vivi_conomi/photo_1.webp", link: "./models/models_all/vivi_conomi.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "man", gender: "man", name: "RAJA SAHANI", kana: "ラジャ サハニ", size: "157 / 100 / 85 / 95", shoes: "25.5", img: "./assets/models_all_image/raja_sahani/photo_1.webp", link: "./models/models_all/raja_sahani.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "Leela Mela", kana: "リラメラ", size: "170 / 89 / 62 / 90", shoes: "24", img: "./assets/models_all_image/leela_mela/photo_1.webp", link: "./models/models_all/leela_mela.html", isPickup: false, isNew: true, joinDate: "2026-11-17" },
    { category: "woman", gender: "woman", name: "清水 絵夢", kana: "シミズ エム", size: "170 / 70 / 63 / 87", shoes: "26", img: "./assets/models_all_image/em_shimizu/photo_1.webp", link: "./models/models_all/em_shimizu.html", isPickup: false, isNew: true, joinDate: "2026-11-17" }
];

const INFO_NEWS_DATA = [
    { date: "2026-09-15", isNew: false, category: "Info", title: "【お知らせ】Fairy Models Agency 公式Webサイトを開設・公開いたしました", link: "./news/notice_20260915_01.html" },
    { date: "2026-11-05", isNew: false, category: "Info", title: "【お知らせ】登録モデル（航波 / So / Tyler T / Julien J / Alfred / Isa / Ryo / SAYURI）のコンポジット・作品写真を更新いたしました", link: "./models_all.html" }
];

function getProcessedNewsData() {
    const grouped = [];

    [...ALL_CASTS_DATA].reverse().forEach(model => {
        if (!model.joinDate) return;

        const existing = grouped.find(g => g.date === model.joinDate && g.category === "Join");
        if (existing) {
            existing.members.push({ name: model.name, link: model.link });
            if (model.isNew) existing.isNew = true;
        } else {
            grouped.push({
                date: model.joinDate,
                displayDate: model.joinDate.replace(/-/g, '.'),
                isNew: Boolean(model.isNew),
                category: "Join",
                isGroup: true,
                members: [{ name: model.name, link: model.link }]
            });
        }
    });

    INFO_NEWS_DATA.forEach(info => {
        grouped.push({
            ...info,
            displayDate: info.date.replace(/-/g, '.'),
            isGroup: false
        });
    });

    grouped.sort((a, b) => b.date.localeCompare(a.date));
    return grouped;
}

const normalizeAssetPath = (path) => path.replace(/^\.\/assets\//, '/assets/');

export const normalizedCastsData = ALL_CASTS_DATA.map((item) => {
  const img = normalizeAssetPath(item.img);
  const link = item.link.replace(/^\.\//, '/').replace(/\.html$/, '');
  const imgDir = img.substring(0, img.lastIndexOf('/'));
  const slugName = link.split('/').pop();

  return {
    ...item,
    name: item.name.trim(),
    kana: item.kana || '',
    shoes: item.shoes || '',
    img,
    link,
    gallery: (item.gallery || []).map(normalizeAssetPath),
    pdf: item.pdf !== undefined ? normalizeAssetPath(item.pdf) : `${imgDir}/${slugName}.pdf`,
    works: item.works || { magazine: '-', show: '-' },
  };
});

export const normalizedInfoNews = INFO_NEWS_DATA.map((item) => ({
  ...item,
  link: item.link.replace(/^\.\//, '/').replace(/\.html$/, ''),
}));

export { ALL_CASTS_DATA, INFO_NEWS_DATA, getProcessedNewsData };