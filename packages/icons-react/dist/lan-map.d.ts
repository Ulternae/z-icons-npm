import React from 'react';

export interface LanMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMap: React.FC<LanMapProps>;
export default LanMap;
