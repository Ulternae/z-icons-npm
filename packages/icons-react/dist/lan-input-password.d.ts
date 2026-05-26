import React from 'react';

export interface LanInputPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInputPassword: React.FC<LanInputPasswordProps>;
export default LanInputPassword;
