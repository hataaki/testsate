'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">クラップ</h1>
              <p className="text-xs text-gray-600">放課後等デイサービス</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">私たちについて</a>
            <a href="#positions" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">募集職種</a>
            <a href="#benefits" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">福利厚生</a>
            <a href="#flow" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">応募の流れ</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">お問い合わせ</a>
          </nav>
          <a href="#contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
            応募する
          </a>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="子どもたちと職員の活動風景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <p className="text-orange-400 font-bold text-lg mb-4 tracking-wider">RECRUIT 2026</p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            子どもたちの未来を<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">一緒に育みませんか</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed">
            放課後等デイサービス クラップでは、<br className="hidden md:block" />
            子どもたちの成長を支える仲間を募集しています
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#positions" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              募集職種を見る
            </a>
            <a href="#about" className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-white/50">
              私たちについて
            </a>
          </div>
        </div>
      </section>

      {/* 数字で見るクラップ */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">NUMBERS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">数字で見るクラップ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-orange-600 mb-2">100+</p>
              <p className="text-gray-700 font-medium">支援実績児童数</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-green-600 mb-2">15</p>
              <p className="text-gray-700 font-medium">スタッフ数</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-orange-600 mb-2">5年</p>
              <p className="text-gray-700 font-medium">平均勤続年数</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-5xl font-bold text-green-600 mb-2">98%</p>
              <p className="text-gray-700 font-medium">職員満足度</p>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちについて */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">私たちについて</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              個別と小集団の療育で、子どもたちの社会的自立につながる支援を行っています
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/facility-interior.jpg"
                alt="施設内観"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Be with you.</h3>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                放課後等デイサービス クラップは、個別と小集団の療育で、子どもたちの社会的自立につながる支援を行っています。
                子どもたち100人いたら100通りの学び方があって、様々な個性をもった子どもたちが、自分の夢を描く事ができる心と力を育む場所です。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">個別療育</h4>
                    <p className="text-gray-600">一人ひとりに合わせた支援プログラム</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">グループ療育</h4>
                    <p className="text-gray-600">仲間と共に社会性を育む集団活動</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">ICT導入</h4>
                    <p className="text-gray-600">最新技術を活用した療育プログラム</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1日の流れ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">DAILY SCHEDULE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">1日の流れ</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { time: '14:00', title: '来所・健康チェック', desc: '子どもたちをお迎えし、体調確認を行います' },
                { time: '14:30', title: '個別療育・自由遊び', desc: '一人ひとりの課題に合わせた支援を実施' },
                { time: '15:30', title: 'おやつタイム', desc: 'みんなで楽しくおやつを食べます' },
                { time: '16:00', title: '集団活動', desc: 'グループでの活動を通じて社会性を育みます' },
                { time: '17:00', title: '自由時間・片付け', desc: '自主的な活動と片付けの習慣づけ' },
                { time: '17:30', title: '送迎・帰宅', desc: '安全に送迎し、保護者様へ報告' }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section id="positions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">POSITIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">募集職種</h2>
            <p className="text-xl text-gray-600">あなたの経験とスキルを活かせる職種</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 児童指導員 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full inline-block mb-6 font-bold text-lg">
                  児童指導員
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Child Care Instructor</h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">仕事内容</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">●</span>
                      <span>放課後等デイサービスにおいて、発達に特性のある子どもたちへの個別・集団支援</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">●</span>
                      <span>集団支援を通した療育プログラムの実施</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">●</span>
                      <span>送迎業務（普通自動車運転免許必須）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">●</span>
                      <span>保護者様とのコミュニケーション</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">求める人物像</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>子どもたちの成長を支えたい方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>コミュニケーション能力のある方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>チームワークを大切にできる方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>向上心を持って学び続けられる方</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">必要な資格</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-orange-200">保育士</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-orange-200">社会福祉士</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-orange-200">精神保健福祉士</span>
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-orange-200">教員免許</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">※いずれかの資格が必要です</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">給与</h4>
                  <p className="text-2xl font-bold text-orange-600 mb-2">月給 250,000円〜350,000円</p>
                  <p className="text-sm text-gray-600">※経験・能力により優遇</p>
                </div>

                <a href="#contact" className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  応募する
                </a>
              </div>
            </div>

            {/* 児童発達支援管理責任者 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full inline-block mb-6 font-bold text-lg">
                  児童発達支援管理責任者
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Child Development Support Manager</h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">仕事内容</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">●</span>
                      <span>個別支援計画の作成・管理</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">●</span>
                      <span>スタッフへの指導・助言</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">●</span>
                      <span>保護者様との面談・相談対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">●</span>
                      <span>関係機関との連携・調整</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">●</span>
                      <span>施設運営のサポート業務</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">求める人物像</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>リーダーシップのある方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>計画的に業務を進められる方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>多職種連携ができる方</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>専門知識を深めたい方</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">必要な資格</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-green-200">児童発達支援管理責任者</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">※研修修了者または取得見込みの方</p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">給与</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">月給 300,000円〜400,000円</p>
                  <p className="text-sm text-gray-600">※経験・能力により優遇</p>
                </div>

                <a href="#contact" className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  応募する
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 職場の雰囲気 */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">WORKPLACE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">職場の雰囲気</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/staff-team.jpg"
                  alt="チーム"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">チームワーク</h3>
                <p className="text-gray-600">多様なバックグラウンドを持つスタッフが協力し合い、子どもたちをサポートしています。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/activity-scene.jpg"
                  alt="活動風景"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">やりがい</h3>
                <p className="text-gray-600">子どもたちの成長を間近で見守り、笑顔に出会える喜びがあります。</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/outdoor-activity.jpg"
                  alt="屋外活動"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">充実した環境</h3>
                <p className="text-gray-600">屋内外の充実した設備で、多様な療育プログラムを提供できます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 福利厚生 */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">BENEFITS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">福利厚生・待遇</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">充実の給与体系</h3>
              <p className="text-gray-700 mb-4">経験・スキルに応じた適正な給与、各種手当、昇給・賞与あり</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 資格手当</li>
                <li>• 役職手当</li>
                <li>• 処遇改善手当</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                📚
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">研修制度</h3>
              <p className="text-gray-700 mb-4">入社時研修、定期研修、外部研修参加支援など充実のサポート</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 新人研修プログラム</li>
                <li>• スキルアップ研修</li>
                <li>• 資格取得支援</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                ☀️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">働きやすい環境</h3>
              <p className="text-gray-700 mb-4">完全週休2日制、有給休暇、育児・介護休暇など</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 年間休日120日</li>
                <li>• 有給取得率80%以上</li>
                <li>• 産休・育休実績あり</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                🏥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">社会保険完備</h3>
              <p className="text-gray-700 mb-4">健康保険、厚生年金、雇用保険、労災保険</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 健康診断（年1回）</li>
                <li>• インフルエンザ予防接種</li>
                <li>• メンタルヘルスケア</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                🚗
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">交通費支給</h3>
              <p className="text-gray-700 mb-4">通勤交通費全額支給（規定あり）</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 公共交通機関利用可</li>
                <li>• マイカー通勤可</li>
                <li>• 駐車場完備</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">職場環境</h3>
              <p className="text-gray-700 mb-4">アットホームな雰囲気、チームワーク重視の環境</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 定期的なミーティング</li>
                <li>• スタッフ交流会</li>
                <li>• 相談しやすい環境</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 応募の流れ */}
      <section id="flow" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">FLOW</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">応募の流れ</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-green-500"></div>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'エントリー', desc: 'お問い合わせフォームまたはお電話にてご連絡ください' },
                  { step: '02', title: '書類選考', desc: '履歴書・職務経歴書をご提出いただきます（1週間程度）' },
                  { step: '03', title: '面接', desc: '施設見学を兼ねた面接を実施します（1〜2回）' },
                  { step: '04', title: '内定', desc: '面接後、1週間以内に結果をご連絡します' },
                  { step: '05', title: '入社', desc: 'ご希望の入社日を調整し、入社手続きを行います' }
                ].map((item, index) => (
                  <div key={index} className="relative flex gap-8 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                      {item.step}
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">よくある質問</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { q: '未経験でも応募できますか？', a: 'はい、可能です。必要な資格をお持ちであれば、未経験の方も歓迎します。充実した研修制度でしっかりサポートいたします。' },
              { q: '勤務時間はどのようになっていますか？', a: '基本的に平日13:00〜18:00、土曜日・祝日・長期休暇期間は9:00〜17:00です。シフト制で柔軟な働き方が可能です。' },
              { q: '車の運転が苦手なのですが大丈夫ですか？', a: '送迎業務がありますが、最初は先輩スタッフが同乗してサポートします。慣れるまで丁寧に指導しますのでご安心ください。' },
              { q: '施設見学は可能ですか？', a: 'はい、随時受け付けております。実際の療育の様子や施設の雰囲気をご覧いただけます。お気軽にお問い合わせください。' },
              { q: '研修制度について教えてください', a: '入社時研修、定期的な社内研修、外部研修への参加支援など、スキルアップのための充実した研修制度を整えています。' }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm">Q</span>
                  <span>{item.q}</span>
                </h4>
                <p className="text-gray-700 pl-11">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-600 font-bold mb-2">CONTACT</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
            <p className="text-xl text-gray-600">採用に関するご質問やご相談は、お気軽にお問い合わせください</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-900 font-bold mb-2">お名前 *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">メールアドレス *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">電話番号</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="090-1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">希望職種 *</label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  value={formData.position}
                  onChange={(e) => setFormData({...formData, position: e.target.value})}
                >
                  <option value="">選択してください</option>
                  <option value="児童指導員">児童指導員</option>
                  <option value="児童発達支援管理責任者">児童発達支援管理責任者</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-900 font-bold mb-2">お問い合わせ内容 *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div>
                  <h3 className="text-xl font-bold">クラップ</h3>
                  <p className="text-sm text-gray-400">放課後等デイサービス</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                個別と小集団の療育で、子どもたちの社会的自立につながる支援を行っています。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">私たちについて</a></li>
                <li><a href="#positions" className="text-gray-400 hover:text-orange-400 transition-colors">募集職種</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-orange-400 transition-colors">福利厚生</a></li>
                <li><a href="#flow" className="text-gray-400 hover:text-orange-400 transition-colors">応募の流れ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">関連サイト</h4>
              <ul className="space-y-2">
                <li><a href="https://day.crop.jp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">公式サイト</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">運営会社</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2020-2026 放課後等デイサービス クラップ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
