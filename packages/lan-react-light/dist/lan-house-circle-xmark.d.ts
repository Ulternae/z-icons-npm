import React from 'react';

export interface LanHouseCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseCircleXmark(props: LanHouseCircleXmarkProps): React.ReactElement;
export default LanHouseCircleXmark;
