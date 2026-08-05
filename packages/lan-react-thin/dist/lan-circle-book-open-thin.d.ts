import React from 'react';

export interface LanCircleBookOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBookOpenThin(props: LanCircleBookOpenThinProps): React.ReactElement;
export default LanCircleBookOpenThin;
