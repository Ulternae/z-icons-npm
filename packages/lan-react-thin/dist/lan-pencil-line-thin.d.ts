import React from 'react';

export interface LanPencilLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilLineThin(props: LanPencilLineThinProps): React.ReactElement;
export default LanPencilLineThin;
