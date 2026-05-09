import React from 'react';

export interface MinaHeartOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartOctagon: React.FC<MinaHeartOctagonProps>;
export default MinaHeartOctagon;
