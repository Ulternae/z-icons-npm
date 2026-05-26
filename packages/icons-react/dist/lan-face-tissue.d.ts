import React from 'react';

export interface LanFaceTissueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTissue: React.FC<LanFaceTissueProps>;
export default LanFaceTissue;
