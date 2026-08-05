import React from 'react';

export interface LanProjectorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanProjectorThin(props: LanProjectorThinProps): React.ReactElement;
export default LanProjectorThin;
