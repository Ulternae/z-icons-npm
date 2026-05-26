import React from 'react';

export interface LanISolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanISolid: React.FC<LanISolidProps>;
export default LanISolid;
