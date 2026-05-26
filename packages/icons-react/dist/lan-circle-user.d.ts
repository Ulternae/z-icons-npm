import React from 'react';

export interface LanCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUser: React.FC<LanCircleUserProps>;
export default LanCircleUser;
