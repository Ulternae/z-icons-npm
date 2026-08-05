import React from 'react';

export interface LanLayerGroupPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupPlusThin(props: LanLayerGroupPlusThinProps): React.ReactElement;
export default LanLayerGroupPlusThin;
