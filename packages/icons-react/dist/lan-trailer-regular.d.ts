import React from 'react';

export interface LanTrailerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrailerRegular: React.FC<LanTrailerRegularProps>;
export default LanTrailerRegular;
