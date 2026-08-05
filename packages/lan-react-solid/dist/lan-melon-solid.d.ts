import React from 'react';

export interface LanMelonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonSolid(props: LanMelonSolidProps): React.ReactElement;
export default LanMelonSolid;
