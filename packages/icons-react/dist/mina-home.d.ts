import React from 'react';

export interface MinaHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHome: React.FC<MinaHomeProps>;
export default MinaHome;
