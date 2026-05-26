import React from 'react';

export interface LanCarKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarKey: React.FC<LanCarKeyProps>;
export default LanCarKey;
