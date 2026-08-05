import React from 'react';

export interface LanForkliftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanForklift(props: LanForkliftProps): React.ReactElement;
export default LanForklift;
