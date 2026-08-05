import React from 'react';

export interface LanStretcherThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStretcherThin(props: LanStretcherThinProps): React.ReactElement;
export default LanStretcherThin;
