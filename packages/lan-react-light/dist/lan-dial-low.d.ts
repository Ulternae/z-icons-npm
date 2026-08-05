import React from 'react';

export interface LanDialLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialLow(props: LanDialLowProps): React.ReactElement;
export default LanDialLow;
