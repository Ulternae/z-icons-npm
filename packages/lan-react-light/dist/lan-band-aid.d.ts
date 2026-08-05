import React from 'react';

export interface LanBandAidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBandAid(props: LanBandAidProps): React.ReactElement;
export default LanBandAid;
