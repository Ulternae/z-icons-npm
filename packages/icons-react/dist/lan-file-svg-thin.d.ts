import React from 'react';

export interface LanFileSvgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSvgThin: React.FC<LanFileSvgThinProps>;
export default LanFileSvgThin;
