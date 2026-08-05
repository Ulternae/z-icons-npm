import React from 'react';

export interface LanOverlineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOverline(props: LanOverlineProps): React.ReactElement;
export default LanOverline;
