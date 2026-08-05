import React from 'react';

export interface LanLayerGroupMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupMinusThin(props: LanLayerGroupMinusThinProps): React.ReactElement;
export default LanLayerGroupMinusThin;
