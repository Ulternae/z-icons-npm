import React from 'react';

export interface LanPenSwirlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSwirl(props: LanPenSwirlProps): React.ReactElement;
export default LanPenSwirl;
