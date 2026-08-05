import React from 'react';

export interface LanSquareSRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareSRegular(props: LanSquareSRegularProps): React.ReactElement;
export default LanSquareSRegular;
