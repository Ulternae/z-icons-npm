import React from 'react';

export interface MinaArrowUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArrowUpDownSolid(props: MinaArrowUpDownSolidProps): React.ReactElement;
export default MinaArrowUpDownSolid;
