import React from 'react';

export interface LanMemoCircleInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoCircleInfo(props: LanMemoCircleInfoProps): React.ReactElement;
export default LanMemoCircleInfo;
