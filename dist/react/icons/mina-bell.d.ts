import React from 'react';

export interface MinaBellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBell: React.FC<MinaBellProps>;
export default MinaBell;
