'use client';

import { useState } from 'react';

export default function DonateClient() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [phoneNumber, setPhoneNumber] = useState('');

  const presetAmounts = ['1000', '5000', '10000', '20000'];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    if (!amount) {
      alert('Please select or enter an amount');
      return;
    }

    if (paymentMethod === 'mpesa') {
      if (!phoneNumber) {
        alert('Please enter your M-Pesa phone number');
        return;
      }
      alert(`M-Pesa donation of KES ${amount} initiated. You will receive a prompt on ${phoneNumber}`);
    } else {
      alert(`Card payment of KES ${amount} initiated`);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Support Northern Bulls</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your contribution helps us build a better future</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">❤️</div>
              <h2 className="text-3xl font-bold text-navy-950 mb-4">Make a Difference</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your support helps us develop young talent, improve facilities, and strengthen our community programs.
              </p>
            </div>

            {/* Preset Amounts */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Select Amount</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl text-center transition-all font-semibold ${
                      selectedAmount === amount
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-200 text-navy-950 hover:border-red-600 hover:bg-red-50'
                    }`}
                  >
                    KES {parseInt(amount).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Or Enter Custom Amount (KES)</label>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount('');
                }}
                placeholder="Enter amount"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none text-lg"
              />
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Method</label>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('mpesa')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === 'mpesa'
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-200 hover:border-green-600'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      M
                    </div>
                  </div>
                  <div className="font-bold text-navy-950">M-Pesa</div>
                  <div className="text-sm text-gray-600">Mobile Money</div>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-600'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <div className="font-bold text-navy-950">Card Payment</div>
                  <div className="text-sm text-gray-600">Visa, Mastercard</div>
                </button>
              </div>
            </div>

            {/* M-Pesa Phone Number */}
            {paymentMethod === 'mpesa' && (
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="254700000000"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">You will receive an M-Pesa prompt to complete payment</p>
              </div>
            )}

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl ${
                paymentMethod === 'mpesa'
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {paymentMethod === 'mpesa' ? '📱 Donate via M-Pesa' : '💳 Donate via Card'}
            </button>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                🔒 Secure payment powered by {paymentMethod === 'mpesa' ? 'Safaricom M-Pesa' : 'Stripe'}
              </p>
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SSL Encrypted
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  100% Secure
                </span>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚽', title: 'Youth Development', description: 'Training 200+ young players annually' },
              { icon: '🏟️', title: 'Facilities', description: 'Upgrading stadium and training grounds' },
              { icon: '🎓', title: 'Education', description: 'Scholarships for student-athletes' },
            ].map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-4xl mb-3">{impact.icon}</div>
                <h3 className="font-bold text-navy-950 mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
