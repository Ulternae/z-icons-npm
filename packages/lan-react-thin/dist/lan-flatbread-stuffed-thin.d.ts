import React from 'react';

export interface LanFlatbreadStuffedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadStuffedThin(props: LanFlatbreadStuffedThinProps): React.ReactElement;
export default LanFlatbreadStuffedThin;
