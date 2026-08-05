import React from 'react';

export interface LanArrowProgressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowProgress(props: LanArrowProgressProps): React.ReactElement;
export default LanArrowProgress;
