import React from 'react';

export interface LanTally2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally2Thin(props: LanTally2ThinProps): React.ReactElement;
export default LanTally2Thin;
