import React from 'react';

export interface LanRulerCombinedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerCombinedThin(props: LanRulerCombinedThinProps): React.ReactElement;
export default LanRulerCombinedThin;
