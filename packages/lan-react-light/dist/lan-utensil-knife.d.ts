import React from 'react';

export interface LanUtensilKnifeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtensilKnife(props: LanUtensilKnifeProps): React.ReactElement;
export default LanUtensilKnife;
