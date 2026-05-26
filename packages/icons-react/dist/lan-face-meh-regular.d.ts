import React from 'react';

export interface LanFaceMehRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehRegular: React.FC<LanFaceMehRegularProps>;
export default LanFaceMehRegular;
