import React from 'react';

export interface LanBoxAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxAltThin(props: LanBoxAltThinProps): React.ReactElement;
export default LanBoxAltThin;
