import React from 'react';

export interface LanPuzzlePieceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzlePieceSolid(props: LanPuzzlePieceSolidProps): React.ReactElement;
export default LanPuzzlePieceSolid;
