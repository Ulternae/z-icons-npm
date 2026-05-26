import React from 'react';

export interface LanFileCaretDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileCaretDown: React.FC<LanFileCaretDownProps>;
export default LanFileCaretDown;
