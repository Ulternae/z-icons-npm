import React from 'react';

export interface LanSquareTugrikSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareTugrikSolid(props: LanSquareTugrikSolidProps): React.ReactElement;
export default LanSquareTugrikSolid;
