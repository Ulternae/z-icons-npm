import React from 'react';

export interface LanFaceGrinWinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinWinkSolid: React.FC<LanFaceGrinWinkSolidProps>;
export default LanFaceGrinWinkSolid;
