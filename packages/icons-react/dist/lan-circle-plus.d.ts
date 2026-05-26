import React from 'react';

export interface LanCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlus: React.FC<LanCirclePlusProps>;
export default LanCirclePlus;
