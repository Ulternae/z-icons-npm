import React from 'react';

export interface LanPlaceOfWorshipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaceOfWorshipSolid: React.FC<LanPlaceOfWorshipSolidProps>;
export default LanPlaceOfWorshipSolid;
