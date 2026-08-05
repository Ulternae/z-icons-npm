import React from 'react';

export interface LanBoxesAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesAltThin(props: LanBoxesAltThinProps): React.ReactElement;
export default LanBoxesAltThin;
