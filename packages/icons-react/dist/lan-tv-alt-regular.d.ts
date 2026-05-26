import React from 'react';

export interface LanTvAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTvAltRegular: React.FC<LanTvAltRegularProps>;
export default LanTvAltRegular;
