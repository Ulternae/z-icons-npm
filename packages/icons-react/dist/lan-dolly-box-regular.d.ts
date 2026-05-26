import React from 'react';

export interface LanDollyBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDollyBoxRegular: React.FC<LanDollyBoxRegularProps>;
export default LanDollyBoxRegular;
