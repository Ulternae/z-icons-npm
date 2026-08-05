import React from 'react';

export interface LanCartCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartCircleXmark(props: LanCartCircleXmarkProps): React.ReactElement;
export default LanCartCircleXmark;
