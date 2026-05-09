import React from 'react';

export interface MinaHeartBrokenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartBroken: React.FC<MinaHeartBrokenProps>;
export default MinaHeartBroken;
