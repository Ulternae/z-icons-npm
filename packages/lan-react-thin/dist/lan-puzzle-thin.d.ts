import React from 'react';

export interface LanPuzzleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzleThin(props: LanPuzzleThinProps): React.ReactElement;
export default LanPuzzleThin;
