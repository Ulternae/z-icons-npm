import React from 'react';

export interface LanCrutchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrutch: React.FC<LanCrutchProps>;
export default LanCrutch;
