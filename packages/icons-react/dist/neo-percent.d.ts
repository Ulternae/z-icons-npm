import React from 'react';

export interface NeoPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPercent: React.FC<NeoPercentProps>;
export default NeoPercent;
