import React from 'react';

export interface LanSlidersSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersSimpleSolid(props: LanSlidersSimpleSolidProps): React.ReactElement;
export default LanSlidersSimpleSolid;
