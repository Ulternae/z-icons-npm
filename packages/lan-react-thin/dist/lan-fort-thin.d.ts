import React from 'react';

export interface LanFortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFortThin(props: LanFortThinProps): React.ReactElement;
export default LanFortThin;
