import React from 'react';

export interface LanUpLongToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpLongToLineThin(props: LanUpLongToLineThinProps): React.ReactElement;
export default LanUpLongToLineThin;
