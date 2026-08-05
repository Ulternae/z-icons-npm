import React from 'react';

export interface LanSneakerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSneakerThin(props: LanSneakerThinProps): React.ReactElement;
export default LanSneakerThin;
