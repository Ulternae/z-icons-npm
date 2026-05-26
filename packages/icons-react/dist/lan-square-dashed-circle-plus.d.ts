import React from 'react';

export interface LanSquareDashedCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedCirclePlus: React.FC<LanSquareDashedCirclePlusProps>;
export default LanSquareDashedCirclePlus;
