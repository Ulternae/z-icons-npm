import React from 'react';

export interface LanPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPen(props: LanPenProps): React.ReactElement;
export default LanPen;
