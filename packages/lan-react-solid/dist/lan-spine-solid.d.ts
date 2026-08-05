import React from 'react';

export interface LanSpineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpineSolid(props: LanSpineSolidProps): React.ReactElement;
export default LanSpineSolid;
