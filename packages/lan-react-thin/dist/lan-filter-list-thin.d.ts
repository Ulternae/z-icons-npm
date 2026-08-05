import React from 'react';

export interface LanFilterListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilterListThin(props: LanFilterListThinProps): React.ReactElement;
export default LanFilterListThin;
