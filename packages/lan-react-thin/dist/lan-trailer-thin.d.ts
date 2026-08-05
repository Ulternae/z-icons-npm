import React from 'react';

export interface LanTrailerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrailerThin(props: LanTrailerThinProps): React.ReactElement;
export default LanTrailerThin;
