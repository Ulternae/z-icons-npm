import React from 'react';

export interface MinaUserMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserMinus: React.FC<MinaUserMinusProps>;
export default MinaUserMinus;
