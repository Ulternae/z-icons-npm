import React from 'react';

export interface LanPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusSolid(props: LanPlusSolidProps): React.ReactElement;
export default LanPlusSolid;
