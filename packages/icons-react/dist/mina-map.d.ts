import React from 'react';

export interface MinaMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMap: React.FC<MinaMapProps>;
export default MinaMap;
