import React from 'react';

export interface LanFaceFrownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownRegular: React.FC<LanFaceFrownRegularProps>;
export default LanFaceFrownRegular;
