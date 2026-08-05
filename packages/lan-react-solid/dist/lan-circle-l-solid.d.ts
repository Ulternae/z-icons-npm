import React from 'react';

export interface LanCircleLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLSolid(props: LanCircleLSolidProps): React.ReactElement;
export default LanCircleLSolid;
