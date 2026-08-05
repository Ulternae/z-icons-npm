import React from 'react';

export interface LanSortUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSortUp(props: LanSortUpProps): React.ReactElement;
export default LanSortUp;
