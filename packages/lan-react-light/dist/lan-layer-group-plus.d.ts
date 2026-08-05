import React from 'react';

export interface LanLayerGroupPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupPlus(props: LanLayerGroupPlusProps): React.ReactElement;
export default LanLayerGroupPlus;
