import React from 'react';

export interface LanVialVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVerticalRegular(props: LanVialVerticalRegularProps): React.ReactElement;
export default LanVialVerticalRegular;
