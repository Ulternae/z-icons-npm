import React from 'react';

export interface LanShortsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShortsRegular: React.FC<LanShortsRegularProps>;
export default LanShortsRegular;
