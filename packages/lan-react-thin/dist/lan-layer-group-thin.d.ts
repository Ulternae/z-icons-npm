import React from 'react';

export interface LanLayerGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupThin(props: LanLayerGroupThinProps): React.ReactElement;
export default LanLayerGroupThin;
