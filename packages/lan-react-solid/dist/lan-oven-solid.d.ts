import React from 'react';

export interface LanOvenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOvenSolid(props: LanOvenSolidProps): React.ReactElement;
export default LanOvenSolid;
