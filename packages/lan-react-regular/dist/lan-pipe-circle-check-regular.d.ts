import React from 'react';

export interface LanPipeCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCircleCheckRegular(props: LanPipeCircleCheckRegularProps): React.ReactElement;
export default LanPipeCircleCheckRegular;
