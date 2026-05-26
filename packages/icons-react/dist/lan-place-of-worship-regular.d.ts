import React from 'react';

export interface LanPlaceOfWorshipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaceOfWorshipRegular: React.FC<LanPlaceOfWorshipRegularProps>;
export default LanPlaceOfWorshipRegular;
