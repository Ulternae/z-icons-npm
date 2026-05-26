import React from 'react';

export interface LanTractorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTractorSolid: React.FC<LanTractorSolidProps>;
export default LanTractorSolid;
