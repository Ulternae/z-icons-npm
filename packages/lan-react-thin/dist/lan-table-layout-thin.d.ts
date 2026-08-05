import React from 'react';

export interface LanTableLayoutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableLayoutThin(props: LanTableLayoutThinProps): React.ReactElement;
export default LanTableLayoutThin;
