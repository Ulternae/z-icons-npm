import React from 'react';

export interface LanUserVneckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVneck(props: LanUserVneckProps): React.ReactElement;
export default LanUserVneck;
