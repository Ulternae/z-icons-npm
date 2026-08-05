import React from 'react';

export interface LanMouseFieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMouseFieldSolid(props: LanMouseFieldSolidProps): React.ReactElement;
export default LanMouseFieldSolid;
