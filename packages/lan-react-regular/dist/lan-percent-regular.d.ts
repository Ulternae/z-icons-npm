import React from 'react';

export interface LanPercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPercentRegular(props: LanPercentRegularProps): React.ReactElement;
export default LanPercentRegular;
