import React from 'react';

export interface LanLayerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerSolid(props: LanLayerSolidProps): React.ReactElement;
export default LanLayerSolid;
