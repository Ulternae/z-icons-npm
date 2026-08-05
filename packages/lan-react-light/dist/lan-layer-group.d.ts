import React from 'react';

export interface LanLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroup(props: LanLayerGroupProps): React.ReactElement;
export default LanLayerGroup;
