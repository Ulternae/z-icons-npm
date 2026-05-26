import React from 'react';

export interface LanMugHotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMugHotRegular: React.FC<LanMugHotRegularProps>;
export default LanMugHotRegular;
