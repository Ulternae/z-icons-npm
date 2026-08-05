import React from 'react';

export interface LanBorderNoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBorderNoneThin(props: LanBorderNoneThinProps): React.ReactElement;
export default LanBorderNoneThin;
