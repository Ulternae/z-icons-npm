import React from 'react';

export interface LanPenAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenAlt(props: LanPenAltProps): React.ReactElement;
export default LanPenAlt;
