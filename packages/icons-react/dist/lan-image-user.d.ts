import React from 'react';

export interface LanImageUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageUser: React.FC<LanImageUserProps>;
export default LanImageUser;
