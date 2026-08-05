import React from 'react';

export interface LanValueAbsoluteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanValueAbsoluteRegular(props: LanValueAbsoluteRegularProps): React.ReactElement;
export default LanValueAbsoluteRegular;
