import React from 'react';

export interface LanDiceSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiceSix(props: LanDiceSixProps): React.ReactElement;
export default LanDiceSix;
