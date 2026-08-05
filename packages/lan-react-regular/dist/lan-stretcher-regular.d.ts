import React from 'react';

export interface LanStretcherRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStretcherRegular(props: LanStretcherRegularProps): React.ReactElement;
export default LanStretcherRegular;
