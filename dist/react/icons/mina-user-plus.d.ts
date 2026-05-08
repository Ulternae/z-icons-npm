import React from 'react';

export interface MinaUserPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserPlus: React.FC<MinaUserPlusProps>;
export default MinaUserPlus;
