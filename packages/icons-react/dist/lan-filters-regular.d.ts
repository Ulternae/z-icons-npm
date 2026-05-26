import React from 'react';

export interface LanFiltersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFiltersRegular: React.FC<LanFiltersRegularProps>;
export default LanFiltersRegular;
