import React from 'react';

export interface LanFaceDottedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDottedRegular: React.FC<LanFaceDottedRegularProps>;
export default LanFaceDottedRegular;
