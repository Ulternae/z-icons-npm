import React from 'react';

export interface LanMinusLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusLargeRegular(props: LanMinusLargeRegularProps): React.ReactElement;
export default LanMinusLargeRegular;
