import React from 'react';

export interface LanDialLowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialLowRegular(props: LanDialLowRegularProps): React.ReactElement;
export default LanDialLowRegular;
