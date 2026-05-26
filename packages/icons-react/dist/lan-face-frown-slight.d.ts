import React from 'react';

export interface LanFaceFrownSlightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownSlight: React.FC<LanFaceFrownSlightProps>;
export default LanFaceFrownSlight;
