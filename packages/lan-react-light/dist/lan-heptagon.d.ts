import React from 'react';

export interface LanHeptagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeptagon(props: LanHeptagonProps): React.ReactElement;
export default LanHeptagon;
