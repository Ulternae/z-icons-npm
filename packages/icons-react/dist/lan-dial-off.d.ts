import React from 'react';

export interface LanDialOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialOff: React.FC<LanDialOffProps>;
export default LanDialOff;
