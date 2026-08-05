import React from 'react';

export interface LanWandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandSolid(props: LanWandSolidProps): React.ReactElement;
export default LanWandSolid;
