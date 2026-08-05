import React from 'react';

export interface LanChildRifleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChildRifleThin(props: LanChildRifleThinProps): React.ReactElement;
export default LanChildRifleThin;
