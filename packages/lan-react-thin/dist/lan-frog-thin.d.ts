import React from 'react';

export interface LanFrogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrogThin(props: LanFrogThinProps): React.ReactElement;
export default LanFrogThin;
