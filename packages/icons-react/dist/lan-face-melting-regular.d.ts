import React from 'react';

export interface LanFaceMeltingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMeltingRegular: React.FC<LanFaceMeltingRegularProps>;
export default LanFaceMeltingRegular;
