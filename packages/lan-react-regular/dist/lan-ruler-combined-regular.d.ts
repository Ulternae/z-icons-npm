import React from 'react';

export interface LanRulerCombinedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRulerCombinedRegular(props: LanRulerCombinedRegularProps): React.ReactElement;
export default LanRulerCombinedRegular;
