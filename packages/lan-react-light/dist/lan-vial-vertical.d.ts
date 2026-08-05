import React from 'react';

export interface LanVialVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialVertical(props: LanVialVerticalProps): React.ReactElement;
export default LanVialVertical;
