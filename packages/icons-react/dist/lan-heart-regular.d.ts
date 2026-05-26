import React from 'react';

export interface LanHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartRegular: React.FC<LanHeartRegularProps>;
export default LanHeartRegular;
