import React from 'react';

export interface LanCircleSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSortSolid(props: LanCircleSortSolidProps): React.ReactElement;
export default LanCircleSortSolid;
