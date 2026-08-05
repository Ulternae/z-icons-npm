import React from 'react';

export interface LanGarageEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageEmptyThin(props: LanGarageEmptyThinProps): React.ReactElement;
export default LanGarageEmptyThin;
