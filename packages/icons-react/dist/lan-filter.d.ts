import React from 'react';

export interface LanFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilter: React.FC<LanFilterProps>;
export default LanFilter;
