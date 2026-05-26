import React from 'react';

export interface LanBarnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarn: React.FC<LanBarnProps>;
export default LanBarn;
