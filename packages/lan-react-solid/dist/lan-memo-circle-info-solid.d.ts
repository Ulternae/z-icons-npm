import React from 'react';

export interface LanMemoCircleInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoCircleInfoSolid(props: LanMemoCircleInfoSolidProps): React.ReactElement;
export default LanMemoCircleInfoSolid;
