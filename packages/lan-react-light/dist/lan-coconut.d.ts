import React from 'react';

export interface LanCoconutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoconut(props: LanCoconutProps): React.ReactElement;
export default LanCoconut;
