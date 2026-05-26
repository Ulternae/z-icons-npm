import React from 'react';

export interface LanHomeHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHomeHeartRegular: React.FC<LanHomeHeartRegularProps>;
export default LanHomeHeartRegular;
