import React from 'react';

export interface LanFacePoutingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePouting: React.FC<LanFacePoutingProps>;
export default LanFacePouting;
