import React from 'react';

export interface LanCircleSortThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSortThin(props: LanCircleSortThinProps): React.ReactElement;
export default LanCircleSortThin;
