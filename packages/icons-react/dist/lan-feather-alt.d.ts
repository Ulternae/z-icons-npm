import React from 'react';

export interface LanFeatherAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFeatherAlt: React.FC<LanFeatherAltProps>;
export default LanFeatherAlt;
