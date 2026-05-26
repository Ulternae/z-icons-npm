import React from 'react';

export interface LanGingerbreadManSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGingerbreadManSolid: React.FC<LanGingerbreadManSolidProps>;
export default LanGingerbreadManSolid;
