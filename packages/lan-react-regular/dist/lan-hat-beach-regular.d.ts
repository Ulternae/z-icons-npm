import React from 'react';

export interface LanHatBeachRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatBeachRegular(props: LanHatBeachRegularProps): React.ReactElement;
export default LanHatBeachRegular;
