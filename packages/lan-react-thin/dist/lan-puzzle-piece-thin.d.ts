import React from 'react';

export interface LanPuzzlePieceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceThin(props: LanPuzzlePieceThinProps): React.ReactElement;
export default LanPuzzlePieceThin;
