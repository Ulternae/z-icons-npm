import React from 'react';

export interface LanCartFlatbedEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbedEmpty(props: LanCartFlatbedEmptyProps): React.ReactElement;
export default LanCartFlatbedEmpty;
