import React from 'react';

export interface LanSquareLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLSolid(props: LanSquareLSolidProps): React.ReactElement;
export default LanSquareLSolid;
