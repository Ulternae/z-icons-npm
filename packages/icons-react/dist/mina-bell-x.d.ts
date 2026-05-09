import React from 'react';

export interface MinaBellXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellX: React.FC<MinaBellXProps>;
export default MinaBellX;
