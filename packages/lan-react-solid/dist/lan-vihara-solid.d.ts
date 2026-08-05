import React from 'react';

export interface LanViharaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViharaSolid(props: LanViharaSolidProps): React.ReactElement;
export default LanViharaSolid;
