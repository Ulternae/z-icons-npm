import React from 'react';

export interface LanUserVisorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVisor(props: LanUserVisorProps): React.ReactElement;
export default LanUserVisor;
