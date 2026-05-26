import React from 'react';

export interface LanSmokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokeSolid: React.FC<LanSmokeSolidProps>;
export default LanSmokeSolid;
