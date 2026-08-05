import React from 'react';

export interface LanSleighSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSleighSolid(props: LanSleighSolidProps): React.ReactElement;
export default LanSleighSolid;
