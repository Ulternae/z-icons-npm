import React from 'react';

export interface LanTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTapeThin(props: LanTapeThinProps): React.ReactElement;
export default LanTapeThin;
