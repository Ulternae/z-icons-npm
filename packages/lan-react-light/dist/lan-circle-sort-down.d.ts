import React from 'react';

export interface LanCircleSortDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSortDown(props: LanCircleSortDownProps): React.ReactElement;
export default LanCircleSortDown;
