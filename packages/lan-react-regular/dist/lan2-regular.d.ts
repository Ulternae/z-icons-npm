import React from 'react';

export interface Lan2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan2Regular(props: Lan2RegularProps): React.ReactElement;
export default Lan2Regular;
