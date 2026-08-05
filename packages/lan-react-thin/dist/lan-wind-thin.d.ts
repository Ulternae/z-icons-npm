import React from 'react';

export interface LanWindThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindThin(props: LanWindThinProps): React.ReactElement;
export default LanWindThin;
