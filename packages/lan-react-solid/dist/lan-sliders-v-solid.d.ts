import React from 'react';

export interface LanSlidersVSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlidersVSolid(props: LanSlidersVSolidProps): React.ReactElement;
export default LanSlidersVSolid;
