import React from 'react';

export interface MinaHeartCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartCheck: React.FC<MinaHeartCheckProps>;
export default MinaHeartCheck;
