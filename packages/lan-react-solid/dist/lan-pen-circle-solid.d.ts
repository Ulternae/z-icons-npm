import React from 'react';

export interface LanPenCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenCircleSolid(props: LanPenCircleSolidProps): React.ReactElement;
export default LanPenCircleSolid;
