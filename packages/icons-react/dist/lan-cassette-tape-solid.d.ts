import React from 'react';

export interface LanCassetteTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCassetteTapeSolid: React.FC<LanCassetteTapeSolidProps>;
export default LanCassetteTapeSolid;
