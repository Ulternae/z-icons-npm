import React from 'react';

export interface LanPlaceOfWorshipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaceOfWorship: React.FC<LanPlaceOfWorshipProps>;
export default LanPlaceOfWorship;
