import React from 'react';

export interface LanCircleTSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleTSolid(props: LanCircleTSolidProps): React.ReactElement;
export default LanCircleTSolid;
