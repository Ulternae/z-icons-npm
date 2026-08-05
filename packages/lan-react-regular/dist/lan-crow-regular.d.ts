import React from 'react';

export interface LanCrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrowRegular(props: LanCrowRegularProps): React.ReactElement;
export default LanCrowRegular;
