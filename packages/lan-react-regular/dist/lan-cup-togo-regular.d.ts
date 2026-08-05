import React from 'react';

export interface LanCupTogoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCupTogoRegular(props: LanCupTogoRegularProps): React.ReactElement;
export default LanCupTogoRegular;
