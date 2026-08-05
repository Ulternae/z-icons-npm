import React from 'react';

export interface LanGarageOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageOpenThin(props: LanGarageOpenThinProps): React.ReactElement;
export default LanGarageOpenThin;
