import React from 'react';

export interface LanSquarePThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePThin(props: LanSquarePThinProps): React.ReactElement;
export default LanSquarePThin;
