import React from 'react';

export interface LanMarsDoubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsDoubleRegular(props: LanMarsDoubleRegularProps): React.ReactElement;
export default LanMarsDoubleRegular;
