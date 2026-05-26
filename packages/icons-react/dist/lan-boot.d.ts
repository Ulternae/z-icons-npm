import React from 'react';

export interface LanBootProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoot: React.FC<LanBootProps>;
export default LanBoot;
