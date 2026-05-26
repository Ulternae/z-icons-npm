import React from 'react';

export interface LanMugTeaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugTeaThin: React.FC<LanMugTeaThinProps>;
export default LanMugTeaThin;
