import React from 'react';

export interface LanKayakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKayak: React.FC<LanKayakProps>;
export default LanKayak;
