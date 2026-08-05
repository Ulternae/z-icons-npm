import React from 'react';

export interface LanPersonSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSimple(props: LanPersonSimpleProps): React.ReactElement;
export default LanPersonSimple;
