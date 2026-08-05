import React from 'react';

export interface LanDuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDuckThin(props: LanDuckThinProps): React.ReactElement;
export default LanDuckThin;
