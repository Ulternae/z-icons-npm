import React from 'react';

export interface LanAngleRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleRightSolid(props: LanAngleRightSolidProps): React.ReactElement;
export default LanAngleRightSolid;
