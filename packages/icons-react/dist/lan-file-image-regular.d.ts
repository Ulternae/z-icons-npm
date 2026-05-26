import React from 'react';

export interface LanFileImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileImageRegular: React.FC<LanFileImageRegularProps>;
export default LanFileImageRegular;
