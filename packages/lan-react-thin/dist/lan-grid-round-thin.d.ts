import React from 'react';

export interface LanGridRoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRoundThin(props: LanGridRoundThinProps): React.ReactElement;
export default LanGridRoundThin;
