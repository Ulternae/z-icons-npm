import React from 'react';

export interface MinaMagnetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMagnet: React.FC<MinaMagnetProps>;
export default MinaMagnet;
