import React from 'react';

export interface MinaBellHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellHome: React.FC<MinaBellHomeProps>;
export default MinaBellHome;
