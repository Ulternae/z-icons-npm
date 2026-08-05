import React from 'react';

export interface LanBongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBongSolid(props: LanBongSolidProps): React.ReactElement;
export default LanBongSolid;
