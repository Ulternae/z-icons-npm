import React from 'react';

export interface LanMugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugThin(props: LanMugThinProps): React.ReactElement;
export default LanMugThin;
