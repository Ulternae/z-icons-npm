import React from 'react';

export interface LanBreadSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBreadSliceThin(props: LanBreadSliceThinProps): React.ReactElement;
export default LanBreadSliceThin;
