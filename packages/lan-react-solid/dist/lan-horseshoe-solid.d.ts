import React from 'react';

export interface LanHorseshoeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseshoeSolid(props: LanHorseshoeSolidProps): React.ReactElement;
export default LanHorseshoeSolid;
