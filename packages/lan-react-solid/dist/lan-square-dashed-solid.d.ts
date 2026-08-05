import React from 'react';

export interface LanSquareDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDashedSolid(props: LanSquareDashedSolidProps): React.ReactElement;
export default LanSquareDashedSolid;
