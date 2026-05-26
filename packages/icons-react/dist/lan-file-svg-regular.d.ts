import React from 'react';

export interface LanFileSvgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSvgRegular: React.FC<LanFileSvgRegularProps>;
export default LanFileSvgRegular;
