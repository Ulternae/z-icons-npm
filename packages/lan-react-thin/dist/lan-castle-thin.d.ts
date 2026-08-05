import React from 'react';

export interface LanCastleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCastleThin(props: LanCastleThinProps): React.ReactElement;
export default LanCastleThin;
