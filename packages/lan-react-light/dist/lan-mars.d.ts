import React from 'react';

export interface LanMarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMars(props: LanMarsProps): React.ReactElement;
export default LanMars;
