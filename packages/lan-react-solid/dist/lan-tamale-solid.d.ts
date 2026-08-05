import React from 'react';

export interface LanTamaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTamaleSolid(props: LanTamaleSolidProps): React.ReactElement;
export default LanTamaleSolid;
