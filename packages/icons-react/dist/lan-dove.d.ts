import React from 'react';

export interface LanDoveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDove: React.FC<LanDoveProps>;
export default LanDove;
