import React from 'react';

export interface LanToothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothRegular: React.FC<LanToothRegularProps>;
export default LanToothRegular;
