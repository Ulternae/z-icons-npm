import React from 'react';

export interface LanEggplantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggplant: React.FC<LanEggplantProps>;
export default LanEggplant;
