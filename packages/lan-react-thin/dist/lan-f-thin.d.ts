import React from 'react';

export interface LanFThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFThin(props: LanFThinProps): React.ReactElement;
export default LanFThin;
