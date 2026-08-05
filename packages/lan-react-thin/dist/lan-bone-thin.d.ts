import React from 'react';

export interface LanBoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoneThin(props: LanBoneThinProps): React.ReactElement;
export default LanBoneThin;
