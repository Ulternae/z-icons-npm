import React from 'react';

export interface LanBuildingColumnsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingColumnsThin(props: LanBuildingColumnsThinProps): React.ReactElement;
export default LanBuildingColumnsThin;
