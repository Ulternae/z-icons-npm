import React from 'react';

export interface LanObjectGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectGroupThin(props: LanObjectGroupThinProps): React.ReactElement;
export default LanObjectGroupThin;
