import React from 'react';

export interface LanLeafOakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafOak: React.FC<LanLeafOakProps>;
export default LanLeafOak;
