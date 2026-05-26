import React from 'react';

export interface LanBlueberriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlueberries: React.FC<LanBlueberriesProps>;
export default LanBlueberries;
