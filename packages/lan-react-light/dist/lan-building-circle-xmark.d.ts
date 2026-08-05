import React from 'react';

export interface LanBuildingCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingCircleXmark(props: LanBuildingCircleXmarkProps): React.ReactElement;
export default LanBuildingCircleXmark;
