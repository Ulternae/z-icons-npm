import React from 'react';

export interface LanHydraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHydra(props: LanHydraProps): React.ReactElement;
export default LanHydra;
