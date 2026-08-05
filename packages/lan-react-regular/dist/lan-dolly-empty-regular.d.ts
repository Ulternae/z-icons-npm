import React from 'react';

export interface LanDollyEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyEmptyRegular(props: LanDollyEmptyRegularProps): React.ReactElement;
export default LanDollyEmptyRegular;
