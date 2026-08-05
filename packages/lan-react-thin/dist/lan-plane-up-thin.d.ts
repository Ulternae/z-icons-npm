import React from 'react';

export interface LanPlaneUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneUpThin(props: LanPlaneUpThinProps): React.ReactElement;
export default LanPlaneUpThin;
