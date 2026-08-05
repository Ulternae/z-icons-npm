import React from 'react';

export interface LanDownLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownLeftSolid(props: LanDownLeftSolidProps): React.ReactElement;
export default LanDownLeftSolid;
