import React from 'react';

export interface LanHorseSaddleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseSaddleThin: React.FC<LanHorseSaddleThinProps>;
export default LanHorseSaddleThin;
