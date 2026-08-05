import React from 'react';

export interface LanLocationArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLocationArrowThin(props: LanLocationArrowThinProps): React.ReactElement;
export default LanLocationArrowThin;
