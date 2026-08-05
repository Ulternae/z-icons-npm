import React from 'react';

export interface LanTireRuggedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireRuggedSolid(props: LanTireRuggedSolidProps): React.ReactElement;
export default LanTireRuggedSolid;
