import React from 'react';

export interface LanAnchorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorThin(props: LanAnchorThinProps): React.ReactElement;
export default LanAnchorThin;
