import React from 'react';

export interface LanLineHeightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLineHeightRegular: React.FC<LanLineHeightRegularProps>;
export default LanLineHeightRegular;
