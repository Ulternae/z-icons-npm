import React from 'react';

export interface LanSquareTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTSolid(props: LanSquareTSolidProps): React.ReactElement;
export default LanSquareTSolid;
