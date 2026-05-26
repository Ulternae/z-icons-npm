import React from 'react';

export interface LanBookOpenLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookOpenLinesSolid: React.FC<LanBookOpenLinesSolidProps>;
export default LanBookOpenLinesSolid;
