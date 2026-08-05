import React from 'react';

export interface LanFileEpsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileEps(props: LanFileEpsProps): React.ReactElement;
export default LanFileEps;
