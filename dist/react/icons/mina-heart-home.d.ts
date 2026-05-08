import React from 'react';

export interface MinaHeartHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartHome: React.FC<MinaHeartHomeProps>;
export default MinaHeartHome;
