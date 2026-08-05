import React from 'react';

export interface LanCodeSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCodeSimple(props: LanCodeSimpleProps): React.ReactElement;
export default LanCodeSimple;
