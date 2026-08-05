import React from 'react';

export interface LanDisplayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayThin(props: LanDisplayThinProps): React.ReactElement;
export default LanDisplayThin;
