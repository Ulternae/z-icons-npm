import React from 'react';

export interface LanTally4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTally4Thin(props: LanTally4ThinProps): React.ReactElement;
export default LanTally4Thin;
