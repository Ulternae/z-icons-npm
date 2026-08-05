import React from 'react';

export interface LanBrailleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrailleThin(props: LanBrailleThinProps): React.ReactElement;
export default LanBrailleThin;
