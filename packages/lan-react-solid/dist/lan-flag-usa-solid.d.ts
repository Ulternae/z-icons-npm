import React from 'react';

export interface LanFlagUsaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagUsaSolid(props: LanFlagUsaSolidProps): React.ReactElement;
export default LanFlagUsaSolid;
