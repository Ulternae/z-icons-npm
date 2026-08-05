import React from 'react';

export interface LanPenToSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenToSquareThin(props: LanPenToSquareThinProps): React.ReactElement;
export default LanPenToSquareThin;
