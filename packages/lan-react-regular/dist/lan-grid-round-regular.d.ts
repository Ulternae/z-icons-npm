import React from 'react';

export interface LanGridRoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridRoundRegular(props: LanGridRoundRegularProps): React.ReactElement;
export default LanGridRoundRegular;
