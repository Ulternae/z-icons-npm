import React from 'react';

export interface LanTurkeySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTurkeySolid: React.FC<LanTurkeySolidProps>;
export default LanTurkeySolid;
