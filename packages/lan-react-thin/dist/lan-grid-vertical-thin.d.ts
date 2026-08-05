import React from 'react';

export interface LanGridVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridVerticalThin(props: LanGridVerticalThinProps): React.ReactElement;
export default LanGridVerticalThin;
