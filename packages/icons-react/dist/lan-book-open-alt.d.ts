import React from 'react';

export interface LanBookOpenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenAlt: React.FC<LanBookOpenAltProps>;
export default LanBookOpenAlt;
