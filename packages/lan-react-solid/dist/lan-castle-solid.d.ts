import React from 'react';

export interface LanCastleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCastleSolid(props: LanCastleSolidProps): React.ReactElement;
export default LanCastleSolid;
