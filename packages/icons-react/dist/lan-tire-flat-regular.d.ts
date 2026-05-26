import React from 'react';

export interface LanTireFlatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireFlatRegular: React.FC<LanTireFlatRegularProps>;
export default LanTireFlatRegular;
