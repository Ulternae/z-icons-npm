import React from 'react';

export interface LanFileSvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSvg: React.FC<LanFileSvgProps>;
export default LanFileSvg;
