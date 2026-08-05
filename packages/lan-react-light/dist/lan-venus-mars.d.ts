import React from 'react';

export interface LanVenusMarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusMars(props: LanVenusMarsProps): React.ReactElement;
export default LanVenusMars;
