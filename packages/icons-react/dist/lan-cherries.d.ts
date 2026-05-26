import React from 'react';

export interface LanCherriesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCherries: React.FC<LanCherriesProps>;
export default LanCherries;
