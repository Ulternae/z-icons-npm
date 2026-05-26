import React from 'react';

export interface LanNoseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoseSolid: React.FC<LanNoseSolidProps>;
export default LanNoseSolid;
