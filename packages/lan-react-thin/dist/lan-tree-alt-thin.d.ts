import React from 'react';

export interface LanTreeAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeAltThin(props: LanTreeAltThinProps): React.ReactElement;
export default LanTreeAltThin;
