import React from 'react';

export interface LanWormProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWorm(props: LanWormProps): React.ReactElement;
export default LanWorm;
