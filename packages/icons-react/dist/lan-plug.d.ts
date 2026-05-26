import React from 'react';

export interface LanPlugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlug: React.FC<LanPlugProps>;
export default LanPlug;
