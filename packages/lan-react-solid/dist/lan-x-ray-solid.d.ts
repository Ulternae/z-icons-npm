import React from 'react';

export interface LanXRaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXRaySolid(props: LanXRaySolidProps): React.ReactElement;
export default LanXRaySolid;
