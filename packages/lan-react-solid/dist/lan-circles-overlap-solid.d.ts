import React from 'react';

export interface LanCirclesOverlapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclesOverlapSolid(props: LanCirclesOverlapSolidProps): React.ReactElement;
export default LanCirclesOverlapSolid;
