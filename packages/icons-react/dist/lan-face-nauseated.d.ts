import React from 'react';

export interface LanFaceNauseatedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceNauseated: React.FC<LanFaceNauseatedProps>;
export default LanFaceNauseated;
