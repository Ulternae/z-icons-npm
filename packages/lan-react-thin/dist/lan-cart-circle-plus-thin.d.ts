import React from 'react';

export interface LanCartCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartCirclePlusThin(props: LanCartCirclePlusThinProps): React.ReactElement;
export default LanCartCirclePlusThin;
