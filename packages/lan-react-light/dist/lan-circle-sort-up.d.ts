import React from 'react';

export interface LanCircleSortUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSortUp(props: LanCircleSortUpProps): React.ReactElement;
export default LanCircleSortUp;
