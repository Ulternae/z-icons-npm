import React from 'react';

export interface LanShowerAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShowerAltThin(props: LanShowerAltThinProps): React.ReactElement;
export default LanShowerAltThin;
