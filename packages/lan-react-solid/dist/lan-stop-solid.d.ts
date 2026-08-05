import React from 'react';

export interface LanStopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStopSolid(props: LanStopSolidProps): React.ReactElement;
export default LanStopSolid;
