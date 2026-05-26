import React from 'react';

export interface LanASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanASolid: React.FC<LanASolidProps>;
export default LanASolid;
