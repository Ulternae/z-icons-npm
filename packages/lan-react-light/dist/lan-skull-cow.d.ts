import React from 'react';

export interface LanSkullCowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCow(props: LanSkullCowProps): React.ReactElement;
export default LanSkullCow;
