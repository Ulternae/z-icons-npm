import React from 'react';

export interface LanPlaceOfWorshipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaceOfWorship(props: LanPlaceOfWorshipProps): React.ReactElement;
export default LanPlaceOfWorship;
