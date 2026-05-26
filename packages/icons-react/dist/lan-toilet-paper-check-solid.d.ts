import React from 'react';

export interface LanToiletPaperCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletPaperCheckSolid: React.FC<LanToiletPaperCheckSolidProps>;
export default LanToiletPaperCheckSolid;
