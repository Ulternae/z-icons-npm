import React from 'react';

export interface LanMugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugSolid(props: LanMugSolidProps): React.ReactElement;
export default LanMugSolid;
