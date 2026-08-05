import React from 'react';

export interface LanFileAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAltThin(props: LanFileAltThinProps): React.ReactElement;
export default LanFileAltThin;
