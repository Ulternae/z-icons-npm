import React from 'react';

export interface LanChalkboardUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChalkboardUser: React.FC<LanChalkboardUserProps>;
export default LanChalkboardUser;
