import React from 'react';

export interface LanTrailerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrailer(props: LanTrailerProps): React.ReactElement;
export default LanTrailer;
