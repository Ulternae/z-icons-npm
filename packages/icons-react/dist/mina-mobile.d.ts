import React from 'react';

export interface MinaMobileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMobile: React.FC<MinaMobileProps>;
export default MinaMobile;
