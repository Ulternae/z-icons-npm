import React from 'react';

export interface LanPersonThroughWindowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonThroughWindowThin(props: LanPersonThroughWindowThinProps): React.ReactElement;
export default LanPersonThroughWindowThin;
