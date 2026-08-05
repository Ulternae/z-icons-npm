import React from 'react';

export interface LanFileAwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileAward(props: LanFileAwardProps): React.ReactElement;
export default LanFileAward;
