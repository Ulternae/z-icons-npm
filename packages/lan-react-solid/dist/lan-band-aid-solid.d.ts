import React from 'react';

export interface LanBandAidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBandAidSolid(props: LanBandAidSolidProps): React.ReactElement;
export default LanBandAidSolid;
