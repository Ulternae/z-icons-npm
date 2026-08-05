import React from 'react';

export interface LanPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPauseSolid(props: LanPauseSolidProps): React.ReactElement;
export default LanPauseSolid;
