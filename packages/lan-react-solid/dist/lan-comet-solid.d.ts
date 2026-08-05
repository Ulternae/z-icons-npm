import React from 'react';

export interface LanCometSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCometSolid(props: LanCometSolidProps): React.ReactElement;
export default LanCometSolid;
