import React from 'react';

export interface LanRugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRug: React.FC<LanRugProps>;
export default LanRug;
