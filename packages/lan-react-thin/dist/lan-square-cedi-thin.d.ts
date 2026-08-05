import React from 'react';

export interface LanSquareCediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCediThin(props: LanSquareCediThinProps): React.ReactElement;
export default LanSquareCediThin;
