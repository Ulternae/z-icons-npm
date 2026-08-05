import React from 'react';

export interface LanPenLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenLineThin(props: LanPenLineThinProps): React.ReactElement;
export default LanPenLineThin;
