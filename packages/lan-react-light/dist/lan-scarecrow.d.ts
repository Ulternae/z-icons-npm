import React from 'react';

export interface LanScarecrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarecrow(props: LanScarecrowProps): React.ReactElement;
export default LanScarecrow;
