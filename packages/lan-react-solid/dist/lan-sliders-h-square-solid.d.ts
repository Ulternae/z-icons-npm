import React from 'react';

export interface LanSlidersHSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersHSquareSolid(props: LanSlidersHSquareSolidProps): React.ReactElement;
export default LanSlidersHSquareSolid;
