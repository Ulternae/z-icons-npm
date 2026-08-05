import React from 'react';

export interface LanTabletButtonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTabletButtonThin(props: LanTabletButtonThinProps): React.ReactElement;
export default LanTabletButtonThin;
