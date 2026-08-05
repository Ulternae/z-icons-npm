import React from 'react';

export interface LanCannonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCannonThin(props: LanCannonThinProps): React.ReactElement;
export default LanCannonThin;
