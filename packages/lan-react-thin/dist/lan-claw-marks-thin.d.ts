import React from 'react';

export interface LanClawMarksThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClawMarksThin(props: LanClawMarksThinProps): React.ReactElement;
export default LanClawMarksThin;
