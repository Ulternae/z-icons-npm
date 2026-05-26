import React from 'react';

export interface LanFacePoutingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePoutingRegular: React.FC<LanFacePoutingRegularProps>;
export default LanFacePoutingRegular;
