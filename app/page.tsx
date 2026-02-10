import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ク</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">クラップ 採用情報</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition">私たちについて</a>
            <a href="#positions" className="text-gray-700 hover:text-orange-500 transition">募集職種</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-500 transition">福利厚生</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
              採用情報
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            子どもたちの未来を<br />
            <span className="text-orange-500">一緒に育みませんか</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            放課後等デイサービス クラップでは、子どもたちの成長を支える仲間を募集しています
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#positions" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1">
              募集職種を見る
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-full font-semibold hover:bg-orange-50 transition">
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">私たちについて</h3>
            <p className="text-lg text-gray-600">About Us</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Be with you.</h4>
              <p className="text-gray-700 leading-relaxed mb-6">
                放課後等デイサービス クラップは、個別と小集団の療育で、子どもたちの社会的自立につながる支援を行っています。子どもが100人いたら100通りの学び方があっていい。様々な個性をもって生まれた子どもたちが、自分の夢を描く事ができる心と力を育む場所です。
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">個別療育</h5>
                    <p className="text-gray-600 text-sm">一人ひとりに合わせた支援プログラム</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">グループ療育</h5>
                    <p className="text-gray-600 text-sm">仲間と共に学ぶ集団活動</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-500 text-sm">✓</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800">ICT導入</h5>
                    <p className="text-gray-600 text-sm">最新技術を活用した支援</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-green-100 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <p className="text-2xl font-bold text-gray-800">未来を育み、<br />夢を描く</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">募集職種</h3>
            <p className="text-lg text-gray-600">Open Positions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Position 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">児童指導員</h4>
                <p className="text-orange-100">Child Care Instructor</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">仕事内容</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      放課後等デイサービスにおいて、発達に特性のある子どもたちへの個別・集団支援を行います。一人ひとりの個性を大切にしながら、社会的自立に向けた療育プログラムを実施します。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">求める人物像</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• 子どもたちの成長を支えたい方</li>
                      <li>• コミュニケーション能力のある方</li>
                      <li>• チームワークを大切にできる方</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">必要な資格</h5>
                    <p className="text-gray-600 text-sm">
                      保育士、社会福祉士、精神保健福祉士、教員免許のいずれか
                    </p>
                  </div>
                </div>
                <a href="#contact" className="mt-6 block w-full text-center px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition">
                  応募する
                </a>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h4 className="text-2xl font-bold text-white mb-2">児童発達支援管理責任者</h4>
                <p className="text-green-100">Child Development Support Manager</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">仕事内容</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      個別支援計画の作成・管理、スタッフへの指導・助言、保護者との面談、関係機関との連携など、施設運営の中核を担います。子どもたちの成長を多角的にサポートする重要な役割です。
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">求める人物像</h5>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• リーダーシップのある方</li>
                      <li>• 計画的に業務を進められる方</li>
                      <li>• 多職種連携ができる方</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">必要な資格</h5>
                    <p className="text-gray-600 text-sm">
                      児童発達支援管理責任者研修修了、または取得見込みの方
                    </p>
                  </div>
                </div>
                <a href="#contact" className="mt-6 block w-full text-center px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">
                  応募する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">福利厚生・待遇</h3>
            <p className="text-lg text-gray-600">Benefits</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">充実の給与体系</h4>
              <p className="text-gray-600 text-sm">経験・スキルに応じた適正な給与、各種手当、昇給・賞与あり</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">研修制度</h4>
              <p className="text-gray-600 text-sm">入社時研修、定期研修、外部研修参加支援など充実のサポート</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">働きやすい環境</h4>
              <p className="text-gray-600 text-sm">完全週休2日制、有給休暇、育児・介護休暇など</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏥</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">社会保険完備</h4>
              <p className="text-gray-600 text-sm">健康保険、厚生年金、雇用保険、労災保険</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚗</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">交通費支給</h4>
              <p className="text-gray-600 text-sm">通勤交通費全額支給（規定あり）</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">職場環境</h4>
              <p className="text-gray-600 text-sm">アットホームな雰囲気、チームワーク重視の職場</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h3>
            <p className="text-lg text-gray-600">Contact Us</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-700 mb-6 text-center">
              採用に関するご質問やご相談は、お気軽にお問い合わせください。
            </p>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">お名前 *</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="山田 太郎" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">メールアドレス *</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="example@email.com" required />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">電話番号</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="090-1234-5678" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">希望職種</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>選択してください</option>
                  <option>児童指導員</option>
                  <option>児童発達支援管理責任者</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">お問い合わせ内容 *</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32" placeholder="お問い合わせ内容をご記入ください" required></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition transform hover:-translate-y-1">
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">放課後等デイサービス クラップ</h4>
              <p className="text-gray-400 text-sm">
                個別と小集団の療育で、子どもたちの社会的自立につながる支援を行います。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">リンク</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-orange-400 transition">私たちについて</a></li>
                <li><a href="#positions" className="hover:text-orange-400 transition">募集職種</a></li>
                <li><a href="#benefits" className="hover:text-orange-400 transition">福利厚生</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">関連サイト</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://day.crop.jp" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">公式サイト</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">運営会社</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2020-2026 放課後等デイサービス クラップ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
