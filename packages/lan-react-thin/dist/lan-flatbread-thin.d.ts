import React from 'react';

export interface LanFlatbreadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadThin(props: LanFlatbreadThinProps): React.ReactElement;
export default LanFlatbreadThin;
