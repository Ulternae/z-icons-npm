import React from 'react';

export interface LanCommaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanComma(props: LanCommaProps): React.ReactElement;
export default LanComma;
