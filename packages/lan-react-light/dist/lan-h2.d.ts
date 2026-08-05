import React from 'react';

export interface LanH2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH2(props: LanH2Props): React.ReactElement;
export default LanH2;
