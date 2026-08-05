import React from 'react';

export interface LanMangoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMangoRegular(props: LanMangoRegularProps): React.ReactElement;
export default LanMangoRegular;
