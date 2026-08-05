import React from 'react';

export interface LanWormThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWormThin(props: LanWormThinProps): React.ReactElement;
export default LanWormThin;
