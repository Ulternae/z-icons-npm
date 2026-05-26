import React from 'react';

export interface LanBoxCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCheckRegular: React.FC<LanBoxCheckRegularProps>;
export default LanBoxCheckRegular;
