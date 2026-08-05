import React from 'react';

export interface LanFileCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCircleInfoThin(props: LanFileCircleInfoThinProps): React.ReactElement;
export default LanFileCircleInfoThin;
