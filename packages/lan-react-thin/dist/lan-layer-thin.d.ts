import React from 'react';

export interface LanLayerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerThin(props: LanLayerThinProps): React.ReactElement;
export default LanLayerThin;
