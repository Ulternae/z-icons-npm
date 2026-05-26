import React from 'react';

export interface LanFaceFrownOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrownOpen: React.FC<LanFaceFrownOpenProps>;
export default LanFaceFrownOpen;
