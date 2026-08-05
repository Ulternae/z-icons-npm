import React from 'react';

export interface LanMelonSliceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonSliceSolid(props: LanMelonSliceSolidProps): React.ReactElement;
export default LanMelonSliceSolid;
