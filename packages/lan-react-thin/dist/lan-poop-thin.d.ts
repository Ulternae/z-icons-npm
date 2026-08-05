import React from 'react';

export interface LanPoopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoopThin(props: LanPoopThinProps): React.ReactElement;
export default LanPoopThin;
