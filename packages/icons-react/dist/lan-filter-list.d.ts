import React from 'react';

export interface LanFilterListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterList: React.FC<LanFilterListProps>;
export default LanFilterList;
