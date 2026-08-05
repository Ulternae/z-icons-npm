import React from 'react';

export interface LanSquareQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareQThin(props: LanSquareQThinProps): React.ReactElement;
export default LanSquareQThin;
