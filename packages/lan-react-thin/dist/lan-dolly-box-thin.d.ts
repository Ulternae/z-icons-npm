import React from 'react';

export interface LanDollyBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyBoxThin(props: LanDollyBoxThinProps): React.ReactElement;
export default LanDollyBoxThin;
