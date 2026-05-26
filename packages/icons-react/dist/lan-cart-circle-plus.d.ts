import React from 'react';

export interface LanCartCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCirclePlus: React.FC<LanCartCirclePlusProps>;
export default LanCartCirclePlus;
