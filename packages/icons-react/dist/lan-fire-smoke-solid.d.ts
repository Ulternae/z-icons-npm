import React from 'react';

export interface LanFireSmokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireSmokeSolid: React.FC<LanFireSmokeSolidProps>;
export default LanFireSmokeSolid;
