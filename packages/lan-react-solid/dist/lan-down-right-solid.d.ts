import React from 'react';

export interface LanDownRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownRightSolid(props: LanDownRightSolidProps): React.ReactElement;
export default LanDownRightSolid;
