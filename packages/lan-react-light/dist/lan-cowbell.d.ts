import React from 'react';

export interface LanCowbellProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowbell(props: LanCowbellProps): React.ReactElement;
export default LanCowbell;
