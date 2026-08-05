import React from 'react';

export interface LanPenSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSquareThin(props: LanPenSquareThinProps): React.ReactElement;
export default LanPenSquareThin;
