import React from 'react';

export interface LanDolphinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDolphinSolid(props: LanDolphinSolidProps): React.ReactElement;
export default LanDolphinSolid;
