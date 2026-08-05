import React from 'react';

export interface LanPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPie(props: LanPieProps): React.ReactElement;
export default LanPie;
