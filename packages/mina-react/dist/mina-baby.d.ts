import React from 'react';

export interface MinaBabyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBaby(props: MinaBabyProps): React.ReactElement;
export default MinaBaby;
