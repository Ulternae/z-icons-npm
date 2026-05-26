import React from 'react';

export interface LanTtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTty: React.FC<LanTtyProps>;
export default LanTty;
