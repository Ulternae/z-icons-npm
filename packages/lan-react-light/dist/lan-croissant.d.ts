import React from 'react';

export interface LanCroissantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCroissant(props: LanCroissantProps): React.ReactElement;
export default LanCroissant;
