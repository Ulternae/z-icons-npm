import React from 'react';

export interface LanSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSSolid: React.FC<LanSSolidProps>;
export default LanSSolid;
