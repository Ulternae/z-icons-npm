import React from 'react';

export interface LanShareAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAltThin(props: LanShareAltThinProps): React.ReactElement;
export default LanShareAltThin;
