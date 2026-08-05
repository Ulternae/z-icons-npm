import React from 'react';

export interface LanCircleQSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQSolid(props: LanCircleQSolidProps): React.ReactElement;
export default LanCircleQSolid;
