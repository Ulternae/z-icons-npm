import React from 'react';

export interface LanH1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH1Solid: React.FC<LanH1SolidProps>;
export default LanH1Solid;
