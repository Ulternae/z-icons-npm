import React from 'react';

export interface LanTrailerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrailerRegular(props: LanTrailerRegularProps): React.ReactElement;
export default LanTrailerRegular;
