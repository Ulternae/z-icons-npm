import React from 'react';

export interface LanPersonDiggingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonDiggingThin(props: LanPersonDiggingThinProps): React.ReactElement;
export default LanPersonDiggingThin;
