import React from 'react';

export interface LanCartFlatbedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbedThin(props: LanCartFlatbedThinProps): React.ReactElement;
export default LanCartFlatbedThin;
