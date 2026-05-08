import React from 'react';

export interface MinaBookHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookHome: React.FC<MinaBookHomeProps>;
export default MinaBookHome;
