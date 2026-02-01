export default function Footer() {
  return (
    <footer className="border-t-4 border-black py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black flex items-center justify-center">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-black tracking-tight">KELAB</span>
          </div>
          <p className="text-black mb-3 sm:mb-4 text-sm sm:text-base">
            Knowledge Engineering Lab @ Hanyang University<br />
            비정형 데이터에서 의미 있는 지식을 발견하고 구조화하는 연구
          </p>

        </div>

        {/* Copyright */}
        <div className="border-t-2 border-black mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-black text-xs sm:text-sm font-medium">
          &copy; {new Date().getFullYear()} Knowledge Engineering Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
