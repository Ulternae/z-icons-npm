import React from 'react';

export interface LanGThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGThin(props: LanGThinProps): React.ReactElement;
export default LanGThin;
