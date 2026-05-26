import React from 'react';

export interface LanBarsFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsFilter: React.FC<LanBarsFilterProps>;
export default LanBarsFilter;
