import React from 'react';

export interface LanBoltAutoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltAuto: React.FC<LanBoltAutoProps>;
export default LanBoltAuto;
