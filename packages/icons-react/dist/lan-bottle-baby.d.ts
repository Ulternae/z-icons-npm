import React from 'react';

export interface LanBottleBabyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBottleBaby: React.FC<LanBottleBabyProps>;
export default LanBottleBaby;
