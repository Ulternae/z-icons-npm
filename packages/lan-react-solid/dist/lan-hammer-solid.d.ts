import React from 'react';

export interface LanHammerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerSolid(props: LanHammerSolidProps): React.ReactElement;
export default LanHammerSolid;
