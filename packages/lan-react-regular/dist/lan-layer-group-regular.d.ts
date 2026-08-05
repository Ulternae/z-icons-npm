import React from 'react';

export interface LanLayerGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupRegular(props: LanLayerGroupRegularProps): React.ReactElement;
export default LanLayerGroupRegular;
