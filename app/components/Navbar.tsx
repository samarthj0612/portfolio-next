'use client'

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 999 }} className="shadow-lg flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none" href="#">
            <svg width="40" height="40" viewBox="0 0 555 555" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_53_2)">
                <path d="M499.5 0H55.5C24.8482 0 0 24.8482 0 55.5V499.5C0 530.152 24.8482 555 55.5 555H499.5C530.152 555 555 530.152 555 499.5V55.5C555 24.8482 530.152 0 499.5 0Z" fill="black" />
                <mask id="path-2-outside-1_53_2" maskUnits="userSpaceOnUse" x="49" y="104" width="456" height="341" fill="black">
                  <rect fill="white" x="49" y="104" width="456" height="341" />
                  <path d="M292.376 186.44C290.136 190.64 286.916 194.7 282.716 198.62C278.516 202.26 274.456 204.78 270.536 206.18C266.616 207.3 264.096 206.88 262.976 204.92C253.456 186.72 240.296 171.6 223.496 159.56C206.696 147.52 188.776 140.52 169.736 138.56C157.976 137.44 147.616 138.28 138.656 141.08C129.976 143.6 123.816 146.68 120.176 150.32C116.816 153.96 114.296 160.54 112.616 170.06C110.936 179.3 112.476 189.52 117.236 200.72C121.996 211.92 129.556 221.3 139.916 228.86C150.276 236.14 163.016 242.44 178.136 247.76C178.976 248.04 184.436 250 194.516 253.64C204.596 257 212.296 259.8 217.616 262.04C253.736 277.44 274.036 300.26 278.516 330.5C281.596 350.66 276.696 370.4 263.816 389.72C256.536 400.92 247.576 410.58 236.936 418.7C210.336 438.86 181.356 446.28 149.996 440.96C128.996 437.32 109.816 428.78 92.4563 415.34C75.0963 401.62 61.6563 384.96 52.1363 365.36C51.0163 363.12 51.5763 359.9 53.8163 355.7C56.3363 351.5 59.6963 347.58 63.8963 343.94C68.0963 340.02 72.0163 337.5 75.6563 336.38C79.5763 334.98 82.0963 335.4 83.2163 337.64C92.4563 356.12 105.196 371.8 121.436 384.68C137.956 397.56 155.036 405.54 172.676 408.62C190.596 411.7 205.296 411.28 216.776 407.36C228.536 403.16 236.236 398.26 239.876 392.66C246.596 382.3 248.836 369.7 246.596 354.86C242.676 328.26 223.916 307.68 190.316 293.12C185.276 290.88 177.716 288.22 167.636 285.14C141.596 276.18 122.836 267.5 111.356 259.1C99.8763 250.7 91.3363 240.2 85.7363 227.6C80.1363 214.72 78.7363 200.58 81.5363 185.18C84.6163 169.78 93.0163 154.8 106.736 140.24C131.656 114.48 160.776 103.28 194.096 106.64C215.096 108.88 234.416 116.44 252.056 129.32C269.976 141.92 283.976 157.74 294.056 176.78C295.176 178.74 294.616 181.96 292.376 186.44ZM470.886 133.1C471.166 130.02 472.986 126.24 476.346 121.76C479.986 117.28 483.486 113.92 486.846 111.68C490.486 109.16 493.426 107.62 495.666 107.06C498.186 106.5 500.006 106.64 501.126 107.48C502.526 108.32 503.086 109.86 502.806 112.1L475.926 352.34C473.966 371.66 467.946 388.18 457.866 401.9C439.106 428.22 413.766 441.24 381.846 440.96C334.526 440.68 309.886 418.28 307.926 373.76C307.926 370.96 309.326 367.32 312.126 362.84C315.206 358.36 318.566 354.86 322.206 352.34C325.846 349.54 328.926 347.72 331.446 346.88C336.766 344.92 339.566 346.04 339.846 350.24C341.806 389.16 363.646 408.76 405.366 409.04C419.646 409.04 429.586 406.94 435.186 402.74C436.866 400.78 438.546 396.72 440.226 390.56C442.186 384.4 443.446 378.66 444.006 373.34L470.886 133.1Z" />
                </mask>
                <path d="M292.376 186.44C290.136 190.64 286.916 194.7 282.716 198.62C278.516 202.26 274.456 204.78 270.536 206.18C266.616 207.3 264.096 206.88 262.976 204.92C253.456 186.72 240.296 171.6 223.496 159.56C206.696 147.52 188.776 140.52 169.736 138.56C157.976 137.44 147.616 138.28 138.656 141.08C129.976 143.6 123.816 146.68 120.176 150.32C116.816 153.96 114.296 160.54 112.616 170.06C110.936 179.3 112.476 189.52 117.236 200.72C121.996 211.92 129.556 221.3 139.916 228.86C150.276 236.14 163.016 242.44 178.136 247.76C178.976 248.04 184.436 250 194.516 253.64C204.596 257 212.296 259.8 217.616 262.04C253.736 277.44 274.036 300.26 278.516 330.5C281.596 350.66 276.696 370.4 263.816 389.72C256.536 400.92 247.576 410.58 236.936 418.7C210.336 438.86 181.356 446.28 149.996 440.96C128.996 437.32 109.816 428.78 92.4563 415.34C75.0963 401.62 61.6563 384.96 52.1363 365.36C51.0163 363.12 51.5763 359.9 53.8163 355.7C56.3363 351.5 59.6963 347.58 63.8963 343.94C68.0963 340.02 72.0163 337.5 75.6563 336.38C79.5763 334.98 82.0963 335.4 83.2163 337.64C92.4563 356.12 105.196 371.8 121.436 384.68C137.956 397.56 155.036 405.54 172.676 408.62C190.596 411.7 205.296 411.28 216.776 407.36C228.536 403.16 236.236 398.26 239.876 392.66C246.596 382.3 248.836 369.7 246.596 354.86C242.676 328.26 223.916 307.68 190.316 293.12C185.276 290.88 177.716 288.22 167.636 285.14C141.596 276.18 122.836 267.5 111.356 259.1C99.8763 250.7 91.3363 240.2 85.7363 227.6C80.1363 214.72 78.7363 200.58 81.5363 185.18C84.6163 169.78 93.0163 154.8 106.736 140.24C131.656 114.48 160.776 103.28 194.096 106.64C215.096 108.88 234.416 116.44 252.056 129.32C269.976 141.92 283.976 157.74 294.056 176.78C295.176 178.74 294.616 181.96 292.376 186.44ZM470.886 133.1C471.166 130.02 472.986 126.24 476.346 121.76C479.986 117.28 483.486 113.92 486.846 111.68C490.486 109.16 493.426 107.62 495.666 107.06C498.186 106.5 500.006 106.64 501.126 107.48C502.526 108.32 503.086 109.86 502.806 112.1L475.926 352.34C473.966 371.66 467.946 388.18 457.866 401.9C439.106 428.22 413.766 441.24 381.846 440.96C334.526 440.68 309.886 418.28 307.926 373.76C307.926 370.96 309.326 367.32 312.126 362.84C315.206 358.36 318.566 354.86 322.206 352.34C325.846 349.54 328.926 347.72 331.446 346.88C336.766 344.92 339.566 346.04 339.846 350.24C341.806 389.16 363.646 408.76 405.366 409.04C419.646 409.04 429.586 406.94 435.186 402.74C436.866 400.78 438.546 396.72 440.226 390.56C442.186 384.4 443.446 378.66 444.006 373.34L470.886 133.1Z" fill="white" />
                <path d="M292.376 186.44L294.141 187.381L294.153 187.358L294.165 187.334L292.376 186.44ZM282.716 198.62L284.026 200.131L284.054 200.107L284.081 200.082L282.716 198.62ZM270.536 206.18L271.086 208.103L271.148 208.085L271.209 208.063L270.536 206.18ZM262.976 204.92L261.204 205.847L261.221 205.88L261.24 205.912L262.976 204.92ZM223.496 159.56L222.331 161.186L223.496 159.56ZM169.736 138.56L169.941 136.57L169.934 136.57L169.926 136.569L169.736 138.56ZM138.656 141.08L139.214 143.001L139.233 142.995L139.253 142.989L138.656 141.08ZM120.176 150.32L118.762 148.906L118.734 148.934L118.707 148.963L120.176 150.32ZM112.616 170.06L114.584 170.418L114.586 170.408L112.616 170.06ZM117.236 200.72L119.077 199.938L119.077 199.938L117.236 200.72ZM139.916 228.86L138.737 230.476L138.752 230.486L138.766 230.496L139.916 228.86ZM178.136 247.76L177.473 249.647L177.488 249.652L177.504 249.657L178.136 247.76ZM194.516 253.64L193.837 255.521L193.86 255.53L193.884 255.537L194.516 253.64ZM217.616 262.04L218.401 260.2L218.392 260.197L217.616 262.04ZM278.516 330.5L276.538 330.793L276.539 330.802L278.516 330.5ZM263.816 389.72L262.152 388.611L262.146 388.62L262.139 388.63L263.816 389.72ZM236.936 418.7L238.144 420.294L238.15 420.29L236.936 418.7ZM149.996 440.96L149.655 442.931L149.662 442.932L149.996 440.96ZM92.4563 415.34L91.2162 416.909L91.2241 416.915L91.232 416.921L92.4563 415.34ZM52.1363 365.36L53.9353 364.486L53.9303 364.476L53.9252 364.466L52.1363 365.36ZM53.8163 355.7L52.1013 354.671L52.0754 354.714L52.0516 354.759L53.8163 355.7ZM63.8963 343.94L65.2062 345.451L65.234 345.427L65.261 345.402L63.8963 343.94ZM75.6563 336.38L76.2445 338.292L76.2871 338.278L76.329 338.263L75.6563 336.38ZM83.2163 337.64L81.4275 338.534L81.4275 338.534L83.2163 337.64ZM121.436 384.68L120.194 386.247L120.2 386.252L120.207 386.257L121.436 384.68ZM172.676 408.62L172.332 410.59L172.338 410.591L172.676 408.62ZM216.776 407.36L217.423 409.253L217.436 409.248L217.449 409.243L216.776 407.36ZM239.876 392.66L241.553 393.75L241.554 393.748L239.876 392.66ZM246.596 354.86L244.618 355.152L244.619 355.159L246.596 354.86ZM190.316 293.12L189.504 294.948L189.513 294.951L189.521 294.955L190.316 293.12ZM167.636 285.14L166.986 287.031L167.019 287.043L167.052 287.053L167.636 285.14ZM111.356 259.1L110.175 260.714L110.175 260.714L111.356 259.1ZM85.7363 227.6L83.9022 228.397L83.9054 228.405L83.9087 228.412L85.7363 227.6ZM81.5363 185.18L79.5752 184.788L79.5717 184.805L79.5686 184.822L81.5363 185.18ZM106.736 140.24L105.299 138.849L105.29 138.859L105.281 138.868L106.736 140.24ZM194.096 106.64L194.308 104.651L194.297 104.65L194.096 106.64ZM252.056 129.32L250.877 130.935L250.891 130.946L250.906 130.956L252.056 129.32ZM294.056 176.78L292.289 177.716L292.304 177.744L292.32 177.772L294.056 176.78ZM290.612 185.499C288.494 189.469 285.423 193.358 281.352 197.158L284.081 200.082C288.41 196.042 291.778 191.811 294.141 187.381L290.612 185.499ZM281.406 197.109C277.335 200.637 273.486 203.003 269.864 204.297L271.209 208.063C275.427 206.557 279.698 203.883 284.026 200.131L281.406 197.109ZM269.987 204.257C268.161 204.779 266.879 204.873 266.035 204.732C265.28 204.606 264.933 204.313 264.713 203.928L261.24 205.912C262.14 207.487 263.613 208.384 265.378 208.678C267.054 208.957 268.992 208.701 271.086 208.103L269.987 204.257ZM264.749 203.993C255.083 185.514 241.714 170.155 224.661 157.934L222.331 161.186C238.879 173.045 251.83 187.926 261.204 205.847L264.749 203.993ZM224.661 157.934C207.602 145.708 189.355 138.569 169.941 136.57L169.532 140.549C188.198 142.471 205.791 149.332 222.331 161.186L224.661 157.934ZM169.926 136.569C157.967 135.43 147.33 136.274 138.06 139.171L139.253 142.989C147.902 140.286 157.986 139.45 169.547 140.551L169.926 136.569ZM138.099 139.159C129.306 141.712 122.758 144.909 118.762 148.906L121.591 151.734C124.874 148.451 130.646 145.488 139.214 143.001L138.099 139.159ZM118.707 148.963C114.938 153.046 112.341 160.114 110.647 169.712L114.586 170.408C116.252 160.966 118.695 154.874 121.646 151.677L118.707 148.963ZM110.649 169.702C108.881 179.425 110.528 190.048 115.396 201.502L119.077 199.938C114.425 188.992 112.992 179.175 114.584 170.418L110.649 169.702ZM115.396 201.502C120.305 213.053 128.102 222.715 138.737 230.476L141.095 227.244C131.011 219.885 123.688 210.787 119.077 199.938L115.396 201.502ZM138.766 230.496C149.31 237.905 162.223 244.281 177.473 249.647L178.8 245.873C163.809 240.599 151.243 234.375 141.066 227.224L138.766 230.496ZM177.504 249.657C178.313 249.927 183.735 251.873 193.837 255.521L195.196 251.759C185.138 248.127 179.64 246.153 178.769 245.863L177.504 249.657ZM193.884 255.537C203.948 258.892 211.591 261.673 216.84 263.883L218.392 260.197C213.001 257.927 205.244 255.108 195.149 251.743L193.884 255.537ZM216.832 263.88C252.52 279.095 272.189 301.438 276.538 330.793L280.495 330.207C275.884 299.082 254.953 275.785 218.401 260.2L216.832 263.88ZM276.539 330.802C279.533 350.4 274.797 369.644 262.152 388.611L265.48 390.829C278.596 371.156 283.659 350.92 280.493 330.198L276.539 330.802ZM262.139 388.63C254.984 399.638 246.181 409.129 235.723 417.11L238.15 420.29C248.971 412.031 258.088 402.202 265.493 390.81L262.139 388.63ZM235.728 417.106C209.544 436.951 181.117 444.211 150.331 438.988L149.662 442.932C181.596 448.349 211.129 440.769 238.144 420.294L235.728 417.106ZM150.338 438.989C129.669 435.407 110.791 427.005 93.6807 413.759L91.232 416.921C108.842 430.555 128.323 439.233 149.655 442.931L150.338 438.989ZM93.6964 413.771C76.5689 400.235 63.3217 383.811 53.9353 364.486L50.3373 366.234C59.991 386.109 73.6237 403.005 91.2162 416.909L93.6964 413.771ZM53.9252 364.466C53.2748 363.165 53.3878 360.753 55.581 356.641L52.0516 354.759C49.7648 359.047 48.7579 363.075 50.3475 366.254L53.9252 364.466ZM55.5313 356.729C57.9291 352.733 61.1447 348.971 65.2062 345.451L62.5865 342.429C58.248 346.189 54.7436 350.267 52.1013 354.671L55.5313 356.729ZM65.261 345.402C69.3422 341.593 73.0036 339.289 76.2445 338.292L75.0682 334.468C71.0291 335.711 66.8505 338.447 62.5317 342.478L65.261 345.402ZM76.329 338.263C78.1484 337.614 79.382 337.489 80.1575 337.618C80.8014 337.725 81.1604 338 81.4275 338.534L85.0052 336.746C84.1523 335.04 82.6913 333.985 80.8151 333.672C79.0707 333.381 77.0842 333.746 74.9837 334.497L76.329 338.263ZM81.4275 338.534C90.7986 357.277 103.725 373.186 120.194 386.247L122.679 383.113C106.667 370.414 94.1141 354.963 85.0052 336.746L81.4275 338.534ZM120.207 386.257C136.941 399.305 154.319 407.445 172.332 410.59L173.02 406.65C155.754 403.635 138.971 395.815 122.666 383.103L120.207 386.257ZM172.338 410.591C190.436 413.702 205.507 413.322 217.423 409.253L216.13 405.467C205.086 409.238 190.757 409.698 173.015 406.649L172.338 410.591ZM217.449 409.243C229.311 405.007 237.542 399.921 241.553 393.75L238.199 391.57C234.931 396.599 227.762 401.313 216.104 405.477L217.449 409.243ZM241.554 393.748C248.595 382.894 250.87 369.776 248.574 354.561L244.619 355.159C246.802 369.624 244.598 381.706 238.198 391.572L241.554 393.748ZM248.575 354.568C244.519 327.047 225.09 306.009 191.112 291.285L189.521 294.955C222.742 309.351 240.834 329.473 244.618 355.152L248.575 354.568ZM191.129 291.292C185.975 289.002 178.322 286.314 168.221 283.227L167.052 287.053C177.111 290.126 184.577 292.758 189.504 294.948L191.129 291.292ZM168.287 283.249C142.294 274.305 123.767 265.703 112.537 257.486L110.175 260.714C121.905 269.297 140.898 278.055 166.986 287.031L168.287 283.249ZM112.537 257.486C101.33 249.285 93.0175 239.058 87.564 226.788L83.9087 228.412C89.6552 241.342 98.4228 252.115 110.175 260.714L112.537 257.486ZM87.5705 226.803C82.1462 214.327 80.7665 200.594 83.5041 185.538L79.5686 184.822C76.7061 200.566 78.1264 215.113 83.9022 228.397L87.5705 226.803ZM83.4975 185.572C86.4864 170.628 94.6593 155.973 108.192 141.612L105.281 138.868C91.3734 153.627 82.7463 168.932 79.5752 184.788L83.4975 185.572ZM108.174 141.631C132.703 116.275 161.232 105.336 193.896 108.63L194.297 104.65C160.32 101.224 130.61 112.685 105.299 138.849L108.174 141.631ZM193.884 108.629C214.522 110.83 233.511 118.255 250.877 130.935L253.236 127.705C235.322 114.625 215.67 106.93 194.308 104.651L193.884 108.629ZM250.906 130.956C268.572 143.378 282.359 158.959 292.289 177.716L295.824 175.844C285.594 156.521 271.38 140.462 253.207 127.684L250.906 130.956ZM292.32 177.772C292.565 178.201 292.741 178.971 292.506 180.322C292.272 181.667 291.662 183.397 290.587 185.546L294.165 187.334C295.331 185.002 296.121 182.883 296.447 181.008C296.772 179.139 296.668 177.319 295.793 175.788L292.32 177.772ZM470.886 133.1L472.874 133.322L472.876 133.302L472.878 133.281L470.886 133.1ZM476.346 121.76L474.794 120.499L474.769 120.529L474.746 120.56L476.346 121.76ZM486.846 111.68L487.956 113.344L487.97 113.334L487.985 113.324L486.846 111.68ZM495.666 107.06L495.232 105.108L495.207 105.113L495.181 105.12L495.666 107.06ZM501.126 107.48L499.926 109.08L500.009 109.142L500.097 109.195L501.126 107.48ZM502.806 112.1L500.822 111.852L500.82 111.865L500.819 111.878L502.806 112.1ZM475.926 352.34L473.939 352.118L473.937 352.128L473.936 352.138L475.926 352.34ZM457.866 401.9L456.254 400.716L456.246 400.727L456.238 400.739L457.866 401.9ZM381.846 440.96L381.864 438.96L381.858 438.96L381.846 440.96ZM307.926 373.76H305.926V373.804L305.928 373.848L307.926 373.76ZM312.126 362.84L310.478 361.707L310.453 361.743L310.43 361.78L312.126 362.84ZM322.206 352.34L323.345 353.984L323.386 353.956L323.426 353.925L322.206 352.34ZM331.446 346.88L332.079 348.777L332.108 348.767L332.138 348.757L331.446 346.88ZM339.846 350.24L341.844 350.139L341.843 350.123L341.842 350.107L339.846 350.24ZM405.366 409.04L405.353 411.04H405.366V409.04ZM435.186 402.74L436.386 404.34L436.562 404.208L436.705 404.042L435.186 402.74ZM440.226 390.56L438.32 389.954L438.308 389.993L438.297 390.034L440.226 390.56ZM444.006 373.34L442.019 373.118L442.017 373.131L444.006 373.34ZM472.878 133.281C473.107 130.763 474.654 127.35 477.946 122.96L474.746 120.56C471.319 125.13 469.225 129.277 468.894 132.919L472.878 133.281ZM477.898 123.021C481.461 118.636 484.817 115.436 487.956 113.344L485.737 110.016C482.155 112.404 478.511 115.924 474.794 120.499L477.898 123.021ZM487.985 113.324C491.574 110.839 494.272 109.47 496.151 109L495.181 105.12C492.58 105.77 489.398 107.481 485.708 110.036L487.985 113.324ZM496.1 109.012C498.495 108.48 499.544 108.793 499.926 109.08L502.326 105.88C500.468 104.487 497.878 104.52 495.232 105.108L496.1 109.012ZM500.097 109.195C500.557 109.471 501.048 110.043 500.822 111.852L504.791 112.348C505.125 109.677 504.495 107.169 502.155 105.765L500.097 109.195ZM500.819 111.878L473.939 352.118L477.914 352.562L504.794 112.322L500.819 111.878ZM473.936 352.138C472.007 371.154 466.095 387.322 456.254 400.716L459.478 403.084C469.798 389.038 475.925 372.166 477.916 352.542L473.936 352.138ZM456.238 400.739C437.851 426.536 413.121 439.234 381.864 438.96L381.829 442.96C414.411 443.246 440.362 429.904 459.495 403.061L456.238 400.739ZM381.858 438.96C358.485 438.822 341.048 433.222 329.222 422.47C317.415 411.737 310.889 395.586 309.924 373.672L305.928 373.848C306.923 396.454 313.697 413.763 326.531 425.43C339.344 437.078 357.887 442.818 381.834 442.96L381.858 438.96ZM309.926 373.76C309.926 371.541 311.072 368.3 313.822 363.9L310.43 361.78C307.58 366.34 305.926 370.379 305.926 373.76H309.926ZM313.774 363.973C316.747 359.649 319.944 356.339 323.345 353.984L321.068 350.696C317.189 353.381 313.665 357.071 310.478 361.707L313.774 363.973ZM323.426 353.925C326.998 351.177 329.87 349.513 332.079 348.777L330.814 344.983C327.982 345.927 324.694 347.903 320.987 350.755L323.426 353.925ZM332.138 348.757C334.694 347.815 336.115 347.835 336.793 348.107C337.201 348.27 337.738 348.689 337.851 350.373L341.842 350.107C341.674 347.591 340.671 345.35 338.279 344.393C336.158 343.545 333.519 343.985 330.755 345.003L332.138 348.757ZM337.849 350.341C338.846 370.152 344.927 385.357 356.36 395.618C367.772 405.859 384.208 410.898 405.353 411.04L405.38 407.04C384.804 406.902 369.461 402.001 359.032 392.642C348.626 383.303 342.806 369.248 341.844 350.139L337.849 350.341ZM405.366 411.04C419.706 411.04 430.229 408.958 436.386 404.34L433.986 401.14C428.944 404.922 419.586 407.04 405.366 407.04V411.04ZM436.705 404.042C437.746 402.827 438.682 401.098 439.554 398.99C440.437 396.856 441.303 394.215 442.156 391.086L438.297 390.034C437.47 393.065 436.655 395.534 435.858 397.46C435.051 399.412 434.307 400.693 433.668 401.438L436.705 404.042ZM442.132 391.166C444.125 384.903 445.418 379.029 445.995 373.549L442.017 373.131C441.474 378.291 440.247 383.897 438.32 389.954L442.132 391.166ZM445.994 373.562L472.874 133.322L468.899 132.878L442.019 373.118L445.994 373.562Z" fill="white" mask="url(#path-2-outside-1_53_2)" />
              </g>
              <defs>
                <clipPath id="clip0_53_2">
                  <rect width="555" height="555" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              onClick={handleMenuToggle}
              aria-controls="navbar-image-1"
              aria-label="Toggle navigation"
            >
              <svg className={`${menuOpen ? 'hidden' : 'block'} flex-shrink-0 size-5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} flex-shrink-0 size-5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
        <div id="navbar-image-1" className={`${menuOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link className="font-medium text-blue-500" href="#home-section" aria-current="page">Home</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#about-section">About</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#services-section">Services</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#skills-section">Skills</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#portfolio-section">Portfolio</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#blogs-section">Blogs</Link>
            <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#contact-section">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
