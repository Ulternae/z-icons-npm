import React from 'react';

export interface LanFileWavSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWavSolid: React.FC<LanFileWavSolidProps>;
export default LanFileWavSolid;
