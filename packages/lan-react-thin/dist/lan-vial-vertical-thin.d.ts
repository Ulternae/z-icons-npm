import React from 'react';

export interface LanVialVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVerticalThin(props: LanVialVerticalThinProps): React.ReactElement;
export default LanVialVerticalThin;
