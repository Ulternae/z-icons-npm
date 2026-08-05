import React from 'react';

export interface LanBuildingsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingsThin(props: LanBuildingsThinProps): React.ReactElement;
export default LanBuildingsThin;
