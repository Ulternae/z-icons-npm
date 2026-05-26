import React from 'react';

export interface LanSignPostsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignPostsSolid: React.FC<LanSignPostsSolidProps>;
export default LanSignPostsSolid;
