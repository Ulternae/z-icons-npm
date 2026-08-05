import React from 'react';

export interface LanBuildingWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingWheat(props: LanBuildingWheatProps): React.ReactElement;
export default LanBuildingWheat;
