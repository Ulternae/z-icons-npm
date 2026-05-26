import React from 'react';

export interface LanTreeChristmasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeChristmasSolid: React.FC<LanTreeChristmasSolidProps>;
export default LanTreeChristmasSolid;
