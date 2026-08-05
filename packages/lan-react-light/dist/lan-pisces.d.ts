import React from 'react';

export interface LanPiscesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPisces(props: LanPiscesProps): React.ReactElement;
export default LanPisces;
