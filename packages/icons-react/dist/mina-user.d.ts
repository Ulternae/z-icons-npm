import React from 'react';

export interface MinaUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUser: React.FC<MinaUserProps>;
export default MinaUser;
