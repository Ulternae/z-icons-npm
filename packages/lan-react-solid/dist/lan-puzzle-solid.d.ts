import React from 'react';

export interface LanPuzzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPuzzleSolid(props: LanPuzzleSolidProps): React.ReactElement;
export default LanPuzzleSolid;
