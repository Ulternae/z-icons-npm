import React from 'react';

export interface LanStaplerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaplerThin(props: LanStaplerThinProps): React.ReactElement;
export default LanStaplerThin;
