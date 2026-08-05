import React from 'react';

export interface LanPenCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenCircleThin(props: LanPenCircleThinProps): React.ReactElement;
export default LanPenCircleThin;
