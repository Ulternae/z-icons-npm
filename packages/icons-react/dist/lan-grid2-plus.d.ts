import React from 'react';

export interface LanGrid2PlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2Plus: React.FC<LanGrid2PlusProps>;
export default LanGrid2Plus;
