import React from 'react';

export interface LanPersonDollyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDollyThin(props: LanPersonDollyThinProps): React.ReactElement;
export default LanPersonDollyThin;
