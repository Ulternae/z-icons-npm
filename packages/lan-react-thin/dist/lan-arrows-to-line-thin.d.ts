import React from 'react';

export interface LanArrowsToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowsToLineThin(props: LanArrowsToLineThinProps): React.ReactElement;
export default LanArrowsToLineThin;
