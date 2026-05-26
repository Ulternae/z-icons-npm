import React from 'react';

export interface LanFaceLaughRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaughRegular: React.FC<LanFaceLaughRegularProps>;
export default LanFaceLaughRegular;
