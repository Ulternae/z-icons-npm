import React from 'react';

export interface LanKhandaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKhanda: React.FC<LanKhandaProps>;
export default LanKhanda;
