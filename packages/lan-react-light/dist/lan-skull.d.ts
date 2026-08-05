import React from 'react';

export interface LanSkullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkull(props: LanSkullProps): React.ReactElement;
export default LanSkull;
