import React from 'react';

export interface LanBookSpineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookSpineSolid(props: LanBookSpineSolidProps): React.ReactElement;
export default LanBookSpineSolid;
