import React from 'react';

export interface LanFacePensiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePensiveRegular: React.FC<LanFacePensiveRegularProps>;
export default LanFacePensiveRegular;
