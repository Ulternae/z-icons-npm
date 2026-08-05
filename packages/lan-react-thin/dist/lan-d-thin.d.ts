import React from 'react';

export interface LanDThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDThin(props: LanDThinProps): React.ReactElement;
export default LanDThin;
