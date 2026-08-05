import React from 'react';

export interface LanJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJ(props: LanJProps): React.ReactElement;
export default LanJ;
