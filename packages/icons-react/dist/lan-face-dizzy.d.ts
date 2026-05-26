import React from 'react';

export interface LanFaceDizzyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDizzy: React.FC<LanFaceDizzyProps>;
export default LanFaceDizzy;
