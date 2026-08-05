import React from 'react';

export interface LanHorseSaddleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseSaddleSolid(props: LanHorseSaddleSolidProps): React.ReactElement;
export default LanHorseSaddleSolid;
