import React from 'react';

export interface LanPawClawsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawClawsSolid(props: LanPawClawsSolidProps): React.ReactElement;
export default LanPawClawsSolid;
