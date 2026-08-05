import React from 'react';

export interface LanIciclesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIciclesThin(props: LanIciclesThinProps): React.ReactElement;
export default LanIciclesThin;
