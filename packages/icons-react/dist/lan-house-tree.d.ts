import React from 'react';

export interface LanHouseTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTree: React.FC<LanHouseTreeProps>;
export default LanHouseTree;
