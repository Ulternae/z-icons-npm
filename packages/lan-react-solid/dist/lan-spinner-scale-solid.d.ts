import React from 'react';

export interface LanSpinnerScaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpinnerScaleSolid(props: LanSpinnerScaleSolidProps): React.ReactElement;
export default LanSpinnerScaleSolid;
