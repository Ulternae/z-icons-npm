import React from 'react';

export interface LanBarProgressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgress(props: LanBarProgressProps): React.ReactElement;
export default LanBarProgress;
