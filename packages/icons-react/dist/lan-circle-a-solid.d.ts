import React from 'react';

export interface LanCircleASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleASolid: React.FC<LanCircleASolidProps>;
export default LanCircleASolid;
