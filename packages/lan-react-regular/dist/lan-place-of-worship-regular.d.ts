import React from 'react';

export interface LanPlaceOfWorshipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaceOfWorshipRegular(props: LanPlaceOfWorshipRegularProps): React.ReactElement;
export default LanPlaceOfWorshipRegular;
