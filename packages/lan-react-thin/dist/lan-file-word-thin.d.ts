import React from 'react';

export interface LanFileWordThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileWordThin(props: LanFileWordThinProps): React.ReactElement;
export default LanFileWordThin;
