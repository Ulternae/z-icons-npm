import React from 'react';

export interface LanBandAidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBandAidRegular(props: LanBandAidRegularProps): React.ReactElement;
export default LanBandAidRegular;
