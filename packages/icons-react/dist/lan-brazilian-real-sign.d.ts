import React from 'react';

export interface LanBrazilianRealSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrazilianRealSign: React.FC<LanBrazilianRealSignProps>;
export default LanBrazilianRealSign;
