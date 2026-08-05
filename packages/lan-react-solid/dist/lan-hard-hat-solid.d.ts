import React from 'react';

export interface LanHardHatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardHatSolid(props: LanHardHatSolidProps): React.ReactElement;
export default LanHardHatSolid;
