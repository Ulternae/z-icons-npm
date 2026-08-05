import React from 'react';

export interface LanShortsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShorts(props: LanShortsProps): React.ReactElement;
export default LanShorts;
