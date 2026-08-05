import React from 'react';

export interface LanGridVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridVerticalRegular(props: LanGridVerticalRegularProps): React.ReactElement;
export default LanGridVerticalRegular;
