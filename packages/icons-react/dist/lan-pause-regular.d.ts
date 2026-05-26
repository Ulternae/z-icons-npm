import React from 'react';

export interface LanPauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPauseRegular: React.FC<LanPauseRegularProps>;
export default LanPauseRegular;
