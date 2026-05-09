import React from 'react';

export interface MinaFilterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilter: React.FC<MinaFilterProps>;
export default MinaFilter;
