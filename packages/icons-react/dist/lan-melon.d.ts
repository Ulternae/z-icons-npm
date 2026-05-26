import React from 'react';

export interface LanMelonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMelon: React.FC<LanMelonProps>;
export default LanMelon;
