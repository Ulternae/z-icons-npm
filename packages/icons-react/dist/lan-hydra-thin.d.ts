import React from 'react';

export interface LanHydraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHydraThin: React.FC<LanHydraThinProps>;
export default LanHydraThin;
