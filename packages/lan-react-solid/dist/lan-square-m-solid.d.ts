import React from 'react';

export interface LanSquareMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMSolid(props: LanSquareMSolidProps): React.ReactElement;
export default LanSquareMSolid;
