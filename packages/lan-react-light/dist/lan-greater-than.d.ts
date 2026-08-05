import React from 'react';

export interface LanGreaterThanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGreaterThan(props: LanGreaterThanProps): React.ReactElement;
export default LanGreaterThan;
