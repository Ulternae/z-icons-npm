import React from 'react';

export interface LanSquareMProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareM(props: LanSquareMProps): React.ReactElement;
export default LanSquareM;
