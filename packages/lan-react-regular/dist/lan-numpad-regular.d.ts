import React from 'react';

export interface LanNumpadRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNumpadRegular(props: LanNumpadRegularProps): React.ReactElement;
export default LanNumpadRegular;
