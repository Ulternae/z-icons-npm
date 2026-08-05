import React from 'react';

export interface LanVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVThin(props: LanVThinProps): React.ReactElement;
export default LanVThin;
