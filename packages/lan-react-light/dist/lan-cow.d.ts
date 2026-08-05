import React from 'react';

export interface LanCowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCow(props: LanCowProps): React.ReactElement;
export default LanCow;
