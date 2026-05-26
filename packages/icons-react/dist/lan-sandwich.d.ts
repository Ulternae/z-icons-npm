import React from 'react';

export interface LanSandwichProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSandwich: React.FC<LanSandwichProps>;
export default LanSandwich;
