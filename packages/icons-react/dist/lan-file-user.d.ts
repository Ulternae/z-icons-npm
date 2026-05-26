import React from 'react';

export interface LanFileUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileUser: React.FC<LanFileUserProps>;
export default LanFileUser;
