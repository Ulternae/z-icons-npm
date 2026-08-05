import React from 'react';

export interface LanTabletScreenButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletScreenButtonThin(props: LanTabletScreenButtonThinProps): React.ReactElement;
export default LanTabletScreenButtonThin;
