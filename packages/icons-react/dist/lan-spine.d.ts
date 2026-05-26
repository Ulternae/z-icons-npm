import React from 'react';

export interface LanSpineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpine: React.FC<LanSpineProps>;
export default LanSpine;
