import React from 'react';

export interface LanMemoCircleInfoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoCircleInfoThin(props: LanMemoCircleInfoThinProps): React.ReactElement;
export default LanMemoCircleInfoThin;
