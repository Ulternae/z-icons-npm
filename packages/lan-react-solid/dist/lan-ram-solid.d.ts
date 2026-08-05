import React from 'react';

export interface LanRamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRamSolid(props: LanRamSolidProps): React.ReactElement;
export default LanRamSolid;
