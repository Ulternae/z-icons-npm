import React from 'react';

export interface LanCircleTugrikSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTugrikSolid(props: LanCircleTugrikSolidProps): React.ReactElement;
export default LanCircleTugrikSolid;
