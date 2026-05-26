import React from 'react';

export interface LanKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKey: React.FC<LanKeyProps>;
export default LanKey;
