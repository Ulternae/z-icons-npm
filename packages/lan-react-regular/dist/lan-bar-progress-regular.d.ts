import React from 'react';

export interface LanBarProgressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressRegular(props: LanBarProgressRegularProps): React.ReactElement;
export default LanBarProgressRegular;
