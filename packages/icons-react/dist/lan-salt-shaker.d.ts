import React from 'react';

export interface LanSaltShakerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaltShaker: React.FC<LanSaltShakerProps>;
export default LanSaltShaker;
