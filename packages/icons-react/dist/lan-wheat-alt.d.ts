import React from 'react';

export interface LanWheatAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheatAlt: React.FC<LanWheatAltProps>;
export default LanWheatAlt;
