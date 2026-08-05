import React from 'react';

export interface LanSplotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSplotch(props: LanSplotchProps): React.ReactElement;
export default LanSplotch;
