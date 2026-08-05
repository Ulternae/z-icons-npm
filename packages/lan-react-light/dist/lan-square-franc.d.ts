import React from 'react';

export interface LanSquareFrancProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFranc(props: LanSquareFrancProps): React.ReactElement;
export default LanSquareFranc;
