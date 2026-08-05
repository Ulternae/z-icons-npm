import React from 'react';

export interface LanVialsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVials(props: LanVialsProps): React.ReactElement;
export default LanVials;
