import React from 'react';

export interface LanRoadCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadCircleXmark(props: LanRoadCircleXmarkProps): React.ReactElement;
export default LanRoadCircleXmark;
