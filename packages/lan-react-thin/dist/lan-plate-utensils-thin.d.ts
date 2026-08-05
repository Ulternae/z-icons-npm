import React from 'react';

export interface LanPlateUtensilsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlateUtensilsThin(props: LanPlateUtensilsThinProps): React.ReactElement;
export default LanPlateUtensilsThin;
