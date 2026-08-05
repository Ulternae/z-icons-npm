import React from 'react';

export interface LanBlenderThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlenderThin(props: LanBlenderThinProps): React.ReactElement;
export default LanBlenderThin;
