import React from 'react';

export interface LanCartCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCircleXmark: React.FC<LanCartCircleXmarkProps>;
export default LanCartCircleXmark;
