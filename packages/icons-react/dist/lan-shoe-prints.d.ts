import React from 'react';

export interface LanShoePrintsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoePrints: React.FC<LanShoePrintsProps>;
export default LanShoePrints;
