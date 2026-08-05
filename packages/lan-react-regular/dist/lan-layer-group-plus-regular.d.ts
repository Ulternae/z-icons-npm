import React from 'react';

export interface LanLayerGroupPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupPlusRegular(props: LanLayerGroupPlusRegularProps): React.ReactElement;
export default LanLayerGroupPlusRegular;
