import React from 'react';

export interface LanFluteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluteSolid: React.FC<LanFluteSolidProps>;
export default LanFluteSolid;
