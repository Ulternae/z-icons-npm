import React from 'react';

export interface LanPenRulerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenRuler(props: LanPenRulerProps): React.ReactElement;
export default LanPenRuler;
