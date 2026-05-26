import React from 'react';

export interface LanAlienRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlienRegular: React.FC<LanAlienRegularProps>;
export default LanAlienRegular;
