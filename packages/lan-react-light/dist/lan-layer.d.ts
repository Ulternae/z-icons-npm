import React from 'react';

export interface LanLayerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayer(props: LanLayerProps): React.ReactElement;
export default LanLayer;
