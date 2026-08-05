import React from 'react';

export interface LanCartFlatbedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartFlatbed(props: LanCartFlatbedProps): React.ReactElement;
export default LanCartFlatbed;
