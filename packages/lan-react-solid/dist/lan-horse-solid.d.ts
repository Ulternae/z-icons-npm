import React from 'react';

export interface LanHorseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseSolid(props: LanHorseSolidProps): React.ReactElement;
export default LanHorseSolid;
