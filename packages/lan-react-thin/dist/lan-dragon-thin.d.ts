import React from 'react';

export interface LanDragonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDragonThin(props: LanDragonThinProps): React.ReactElement;
export default LanDragonThin;
