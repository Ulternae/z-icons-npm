import React from 'react';

export interface LanRhombusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRhombus(props: LanRhombusProps): React.ReactElement;
export default LanRhombus;
