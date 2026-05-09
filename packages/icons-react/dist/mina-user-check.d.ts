import React from 'react';

export interface MinaUserCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserCheck: React.FC<MinaUserCheckProps>;
export default MinaUserCheck;
