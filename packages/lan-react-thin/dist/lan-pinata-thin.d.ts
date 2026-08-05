import React from 'react';

export interface LanPinataThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinataThin(props: LanPinataThinProps): React.ReactElement;
export default LanPinataThin;
