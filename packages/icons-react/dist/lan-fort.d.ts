import React from 'react';

export interface LanFortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFort: React.FC<LanFortProps>;
export default LanFort;
