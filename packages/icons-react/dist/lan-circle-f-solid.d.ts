import React from 'react';

export interface LanCircleFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFSolid: React.FC<LanCircleFSolidProps>;
export default LanCircleFSolid;
