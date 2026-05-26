import React from 'react';

export interface LanFaceTissueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTissueSolid: React.FC<LanFaceTissueSolidProps>;
export default LanFaceTissueSolid;
