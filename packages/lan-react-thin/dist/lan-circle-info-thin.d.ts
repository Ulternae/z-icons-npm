import React from 'react';

export interface LanCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleInfoThin(props: LanCircleInfoThinProps): React.ReactElement;
export default LanCircleInfoThin;
