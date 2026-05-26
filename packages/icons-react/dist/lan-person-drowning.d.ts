import React from 'react';

export interface LanPersonDrowningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDrowning: React.FC<LanPersonDrowningProps>;
export default LanPersonDrowning;
