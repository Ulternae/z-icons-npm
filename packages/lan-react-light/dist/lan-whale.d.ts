import React from 'react';

export interface LanWhaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhale(props: LanWhaleProps): React.ReactElement;
export default LanWhale;
