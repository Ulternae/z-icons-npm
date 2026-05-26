import React from 'react';

export interface LanCircleLariSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLariSolid: React.FC<LanCircleLariSolidProps>;
export default LanCircleLariSolid;
