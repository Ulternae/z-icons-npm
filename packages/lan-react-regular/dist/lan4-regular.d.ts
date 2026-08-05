import React from 'react';

export interface Lan4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function Lan4Regular(props: Lan4RegularProps): React.ReactElement;
export default Lan4Regular;
