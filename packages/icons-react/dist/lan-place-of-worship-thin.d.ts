import React from 'react';

export interface LanPlaceOfWorshipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaceOfWorshipThin: React.FC<LanPlaceOfWorshipThinProps>;
export default LanPlaceOfWorshipThin;
