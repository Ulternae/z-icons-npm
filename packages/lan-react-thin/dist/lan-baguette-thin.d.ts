import React from 'react';

export interface LanBaguetteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaguetteThin(props: LanBaguetteThinProps): React.ReactElement;
export default LanBaguetteThin;
