import React from 'react';

export interface LanFeatherAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeatherAltThin: React.FC<LanFeatherAltThinProps>;
export default LanFeatherAltThin;
