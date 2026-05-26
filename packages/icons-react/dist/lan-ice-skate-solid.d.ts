import React from 'react';

export interface LanIceSkateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceSkateSolid: React.FC<LanIceSkateSolidProps>;
export default LanIceSkateSolid;
