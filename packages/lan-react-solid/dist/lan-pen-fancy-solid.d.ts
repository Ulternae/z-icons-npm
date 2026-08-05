import React from 'react';

export interface LanPenFancySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancySolid(props: LanPenFancySolidProps): React.ReactElement;
export default LanPenFancySolid;
