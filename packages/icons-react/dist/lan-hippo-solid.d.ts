import React from 'react';

export interface LanHippoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHippoSolid: React.FC<LanHippoSolidProps>;
export default LanHippoSolid;
