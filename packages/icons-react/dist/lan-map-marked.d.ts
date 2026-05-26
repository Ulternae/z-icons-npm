import React from 'react';

export interface LanMapMarkedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMapMarked: React.FC<LanMapMarkedProps>;
export default LanMapMarked;
