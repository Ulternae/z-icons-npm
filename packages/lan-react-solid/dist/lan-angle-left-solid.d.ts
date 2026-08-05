import React from 'react';

export interface LanAngleLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleLeftSolid(props: LanAngleLeftSolidProps): React.ReactElement;
export default LanAngleLeftSolid;
