import React from 'react';

export interface LanAnglesUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnglesUpDownThin(props: LanAnglesUpDownThinProps): React.ReactElement;
export default LanAnglesUpDownThin;
