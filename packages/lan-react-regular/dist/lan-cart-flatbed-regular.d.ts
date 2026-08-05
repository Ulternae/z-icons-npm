import React from 'react';

export interface LanCartFlatbedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbedRegular(props: LanCartFlatbedRegularProps): React.ReactElement;
export default LanCartFlatbedRegular;
