import React from 'react';

export interface LanPuzzleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzle(props: LanPuzzleProps): React.ReactElement;
export default LanPuzzle;
