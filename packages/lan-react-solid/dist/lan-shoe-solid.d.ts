import React from 'react';

export interface LanShoeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoeSolid(props: LanShoeSolidProps): React.ReactElement;
export default LanShoeSolid;
