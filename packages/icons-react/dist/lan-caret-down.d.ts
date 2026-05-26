import React from 'react';

export interface LanCaretDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaretDown: React.FC<LanCaretDownProps>;
export default LanCaretDown;
