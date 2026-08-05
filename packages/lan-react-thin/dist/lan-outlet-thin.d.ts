import React from 'react';

export interface LanOutletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOutletThin(props: LanOutletThinProps): React.ReactElement;
export default LanOutletThin;
