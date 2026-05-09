import React from 'react';

export interface MinaHeartXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartX: React.FC<MinaHeartXProps>;
export default MinaHeartX;
