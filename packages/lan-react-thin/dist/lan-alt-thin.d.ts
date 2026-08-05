import React from 'react';

export interface LanAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAltThin(props: LanAltThinProps): React.ReactElement;
export default LanAltThin;
