import React from 'react';

export interface LanHeartCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCirclePlus: React.FC<LanHeartCirclePlusProps>;
export default LanHeartCirclePlus;
