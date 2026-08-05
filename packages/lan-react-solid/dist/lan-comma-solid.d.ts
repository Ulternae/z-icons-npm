import React from 'react';

export interface LanCommaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommaSolid(props: LanCommaSolidProps): React.ReactElement;
export default LanCommaSolid;
