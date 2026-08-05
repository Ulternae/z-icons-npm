import React from 'react';

export interface LanTreeLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeLargeRegular(props: LanTreeLargeRegularProps): React.ReactElement;
export default LanTreeLargeRegular;
