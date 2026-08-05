import React from 'react';

export interface LanDiceSixRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceSixRegular(props: LanDiceSixRegularProps): React.ReactElement;
export default LanDiceSixRegular;
