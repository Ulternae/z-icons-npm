import React from 'react';

export interface LanFileEpsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileEpsRegular: React.FC<LanFileEpsRegularProps>;
export default LanFileEpsRegular;
