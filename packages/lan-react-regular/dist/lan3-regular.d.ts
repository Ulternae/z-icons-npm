import React from 'react';

export interface Lan3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan3Regular(props: Lan3RegularProps): React.ReactElement;
export default Lan3Regular;
