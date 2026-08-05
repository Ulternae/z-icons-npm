import React from 'react';

export interface LanShareAllThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAllThin(props: LanShareAllThinProps): React.ReactElement;
export default LanShareAllThin;
