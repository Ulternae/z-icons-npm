import React from 'react';

export interface LanCardHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardHeartRegular: React.FC<LanCardHeartRegularProps>;
export default LanCardHeartRegular;
