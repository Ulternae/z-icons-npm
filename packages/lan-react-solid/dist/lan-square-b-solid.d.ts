import React from 'react';

export interface LanSquareBSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBSolid(props: LanSquareBSolidProps): React.ReactElement;
export default LanSquareBSolid;
