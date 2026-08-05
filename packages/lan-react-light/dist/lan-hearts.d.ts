import React from 'react';

export interface LanHeartsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHearts(props: LanHeartsProps): React.ReactElement;
export default LanHearts;
