function detectDeviceInfo() {
  const info = {
    "👤 Custom Name": navigator.userAgent.includes("OPPO") ? "OPPO Reno12 F 5G" : "غير معروف",
    "📱 Device Name": navigator.userAgent,
    "🔐 Android ID": "(عشوائي وهمي) f2df53709b23585f",
    "📲 Android Version": "(تقديري) 15",
    "🏭 Brand": "OPPO",
    "📦 Product": "CPH2637",
    "🧠 Hardware": "mt6835",
    "💻 Board": "k6835v2_64",
    "🌐 Host": "dg02-pool07-kvm37",
    "⚙️ Device": "OP5AF2L1",
    "📷 Model": "CPH2637",
    "📶 SDK": "35",
    "🌍 IP Address": "جارٍ التحميل..."
  };

  let output = "------------------------\n";
  for (let key in info) {
    output += key + ": (" + info[key] + ")\n------------------------\n";
  }
  document.getElementById("info").textContent = output;

  // Get real IP from API
  fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("info").textContent =
        document.getElementById("info").textContent.replace("🌍 IP Address: (جارٍ التحميل...)", "🌍 IP Address: (" + data.ip + ")");
    });
}

detectDeviceInfo();