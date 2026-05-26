import React from 'react';

export interface LanFaceDizzyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDizzyRegular: React.FC<LanFaceDizzyRegularProps>;
export default LanFaceDizzyRegular;
