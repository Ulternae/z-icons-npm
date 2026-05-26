import React from 'react';

export interface LanBoxTissueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxTissueSolid: React.FC<LanBoxTissueSolidProps>;
export default LanBoxTissueSolid;
