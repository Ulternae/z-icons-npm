import React from 'react';

export interface LanSpinnerThirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerThirdSolid(props: LanSpinnerThirdSolidProps): React.ReactElement;
export default LanSpinnerThirdSolid;
