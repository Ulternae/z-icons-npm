import React from 'react';

export interface LanBoxesAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxesAlt: React.FC<LanBoxesAltProps>;
export default LanBoxesAlt;
