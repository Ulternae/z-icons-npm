import React from 'react';

export interface LanFileMovRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMovRegular: React.FC<LanFileMovRegularProps>;
export default LanFileMovRegular;
