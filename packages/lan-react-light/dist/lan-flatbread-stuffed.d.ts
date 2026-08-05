import React from 'react';

export interface LanFlatbreadStuffedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlatbreadStuffed(props: LanFlatbreadStuffedProps): React.ReactElement;
export default LanFlatbreadStuffed;
