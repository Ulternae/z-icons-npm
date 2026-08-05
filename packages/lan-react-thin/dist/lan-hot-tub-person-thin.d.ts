import React from 'react';

export interface LanHotTubPersonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHotTubPersonThin(props: LanHotTubPersonThinProps): React.ReactElement;
export default LanHotTubPersonThin;
