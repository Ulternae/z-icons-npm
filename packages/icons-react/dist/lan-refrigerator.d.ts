import React from 'react';

export interface LanRefrigeratorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRefrigerator: React.FC<LanRefrigeratorProps>;
export default LanRefrigerator;
