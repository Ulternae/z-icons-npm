import React from 'react';

export interface LanSquareMThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareMThin(props: LanSquareMThinProps): React.ReactElement;
export default LanSquareMThin;
