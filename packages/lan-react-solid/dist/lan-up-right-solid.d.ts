import React from 'react';

export interface LanUpRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpRightSolid(props: LanUpRightSolidProps): React.ReactElement;
export default LanUpRightSolid;
