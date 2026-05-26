import React from 'react';

export interface LanFaceNauseatedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceNauseatedSolid: React.FC<LanFaceNauseatedSolidProps>;
export default LanFaceNauseatedSolid;
