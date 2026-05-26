import React from 'react';

export interface LanTurkishLiraSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurkishLiraSign: React.FC<LanTurkishLiraSignProps>;
export default LanTurkishLiraSign;
