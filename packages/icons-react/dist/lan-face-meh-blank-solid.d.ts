import React from 'react';

export interface LanFaceMehBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehBlankSolid: React.FC<LanFaceMehBlankSolidProps>;
export default LanFaceMehBlankSolid;
