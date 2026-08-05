import React from 'react';

export interface LanXmarkLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarkLargeRegular(props: LanXmarkLargeRegularProps): React.ReactElement;
export default LanXmarkLargeRegular;
