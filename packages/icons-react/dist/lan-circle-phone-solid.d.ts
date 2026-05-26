import React from 'react';

export interface LanCirclePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePhoneSolid: React.FC<LanCirclePhoneSolidProps>;
export default LanCirclePhoneSolid;
