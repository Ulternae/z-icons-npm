import React from 'react';

export interface LanSignPostThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignPostThin(props: LanSignPostThinProps): React.ReactElement;
export default LanSignPostThin;
