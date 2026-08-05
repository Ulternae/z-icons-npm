import React from 'react';

export interface LanArrowsToDotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToDotThin(props: LanArrowsToDotThinProps): React.ReactElement;
export default LanArrowsToDotThin;
