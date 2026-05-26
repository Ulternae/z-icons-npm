import React from 'react';

export interface LanFaceSalutingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSalutingRegular: React.FC<LanFaceSalutingRegularProps>;
export default LanFaceSalutingRegular;
