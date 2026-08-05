import React from 'react';

export interface LanZThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZThin(props: LanZThinProps): React.ReactElement;
export default LanZThin;
