import React from 'react';

export interface LanStretcherProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStretcher(props: LanStretcherProps): React.ReactElement;
export default LanStretcher;
