import React from 'react';

export interface LanDrawCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrawCircleRegular(props: LanDrawCircleRegularProps): React.ReactElement;
export default LanDrawCircleRegular;
