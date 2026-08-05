import React from 'react';

export interface LanAngleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleThin(props: LanAngleThinProps): React.ReactElement;
export default LanAngleThin;
