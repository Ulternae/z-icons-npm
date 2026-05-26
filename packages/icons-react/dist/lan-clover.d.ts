import React from 'react';

export interface LanCloverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClover: React.FC<LanCloverProps>;
export default LanClover;
