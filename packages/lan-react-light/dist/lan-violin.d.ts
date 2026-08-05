import React from 'react';

export interface LanViolinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanViolin(props: LanViolinProps): React.ReactElement;
export default LanViolin;
