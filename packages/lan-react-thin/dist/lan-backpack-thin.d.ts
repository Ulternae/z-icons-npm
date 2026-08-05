import React from 'react';

export interface LanBackpackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackpackThin(props: LanBackpackThinProps): React.ReactElement;
export default LanBackpackThin;
