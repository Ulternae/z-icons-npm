import React from 'react';

export interface LanPhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneSolid: React.FC<LanPhoneSolidProps>;
export default LanPhoneSolid;
