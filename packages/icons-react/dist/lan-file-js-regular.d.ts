import React from 'react';

export interface LanFileJsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJsRegular: React.FC<LanFileJsRegularProps>;
export default LanFileJsRegular;
