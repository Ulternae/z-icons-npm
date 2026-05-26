import React from 'react';

export interface LanNairaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNairaSign: React.FC<LanNairaSignProps>;
export default LanNairaSign;
