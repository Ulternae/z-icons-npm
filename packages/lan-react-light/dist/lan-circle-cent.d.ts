import React from 'react';

export interface LanCircleCentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCent(props: LanCircleCentProps): React.ReactElement;
export default LanCircleCent;
