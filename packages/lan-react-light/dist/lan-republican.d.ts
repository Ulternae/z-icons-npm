import React from 'react';

export interface LanRepublicanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepublican(props: LanRepublicanProps): React.ReactElement;
export default LanRepublican;
