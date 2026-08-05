import React from 'react';

export interface LanPencilAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilAlt(props: LanPencilAltProps): React.ReactElement;
export default LanPencilAlt;
