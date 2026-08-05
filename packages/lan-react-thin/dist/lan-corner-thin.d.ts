import React from 'react';

export interface LanCornerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornerThin(props: LanCornerThinProps): React.ReactElement;
export default LanCornerThin;
