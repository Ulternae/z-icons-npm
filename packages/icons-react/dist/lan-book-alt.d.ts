import React from 'react';

export interface LanBookAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAlt: React.FC<LanBookAltProps>;
export default LanBookAlt;
