import React from 'react';

export interface LanMemoCircleInfoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoCircleInfoRegular(props: LanMemoCircleInfoRegularProps): React.ReactElement;
export default LanMemoCircleInfoRegular;
