import React from 'react';

export interface LanFilmsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilmsRegular: React.FC<LanFilmsRegularProps>;
export default LanFilmsRegular;
