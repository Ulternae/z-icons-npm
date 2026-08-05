import React from 'react';

export interface LanSquareFThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareFThin(props: LanSquareFThinProps): React.ReactElement;
export default LanSquareFThin;
