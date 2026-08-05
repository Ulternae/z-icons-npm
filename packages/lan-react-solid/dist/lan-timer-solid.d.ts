import React from 'react';

export interface LanTimerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimerSolid(props: LanTimerSolidProps): React.ReactElement;
export default LanTimerSolid;
