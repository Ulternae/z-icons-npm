import React from 'react';

export interface BruAccessibleIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAccessibleIcon(props: BruAccessibleIconProps): React.ReactElement;
export default BruAccessibleIcon;
