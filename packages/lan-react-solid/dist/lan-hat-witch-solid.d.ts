import React from 'react';

export interface LanHatWitchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWitchSolid(props: LanHatWitchSolidProps): React.ReactElement;
export default LanHatWitchSolid;
