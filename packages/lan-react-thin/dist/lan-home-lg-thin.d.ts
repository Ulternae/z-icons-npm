import React from 'react';

export interface LanHomeLgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeLgThin(props: LanHomeLgThinProps): React.ReactElement;
export default LanHomeLgThin;
