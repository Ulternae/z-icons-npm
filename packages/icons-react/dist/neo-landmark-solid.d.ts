import React from 'react';

export interface NeoLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLandmarkSolid: React.FC<NeoLandmarkSolidProps>;
export default NeoLandmarkSolid;
