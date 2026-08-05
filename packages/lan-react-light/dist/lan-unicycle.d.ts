import React from 'react';

export interface LanUnicycleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicycle(props: LanUnicycleProps): React.ReactElement;
export default LanUnicycle;
