import React from 'react';

export interface LanSpinnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerSolid(props: LanSpinnerSolidProps): React.ReactElement;
export default LanSpinnerSolid;
