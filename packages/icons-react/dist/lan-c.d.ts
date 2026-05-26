import React from 'react';

export interface LanCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanC: React.FC<LanCProps>;
export default LanC;
