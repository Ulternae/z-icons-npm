import React from 'react';

export interface LanEngineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEngineSolid: React.FC<LanEngineSolidProps>;
export default LanEngineSolid;
