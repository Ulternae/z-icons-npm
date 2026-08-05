import React from 'react';

export interface LanBookAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAltThin(props: LanBookAltThinProps): React.ReactElement;
export default LanBookAltThin;
