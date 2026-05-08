import React from 'react';

export interface MinaLocationHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLocationHome: React.FC<MinaLocationHomeProps>;
export default MinaLocationHome;
