import React from 'react';

export interface LanCrabProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrab(props: LanCrabProps): React.ReactElement;
export default LanCrab;
