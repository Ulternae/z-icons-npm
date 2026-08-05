import React from 'react';

export interface LanBarsSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsSortSolid(props: LanBarsSortSolidProps): React.ReactElement;
export default LanBarsSortSolid;
