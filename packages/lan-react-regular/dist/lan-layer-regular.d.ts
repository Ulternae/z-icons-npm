import React from 'react';

export interface LanLayerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerRegular(props: LanLayerRegularProps): React.ReactElement;
export default LanLayerRegular;
