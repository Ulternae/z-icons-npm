import React from 'react';

export interface LanSlidersVSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVSquareSolid(props: LanSlidersVSquareSolidProps): React.ReactElement;
export default LanSlidersVSquareSolid;
