import React from 'react';

export interface MinaUserXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserX: React.FC<MinaUserXProps>;
export default MinaUserX;
