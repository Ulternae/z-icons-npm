import React from 'react';

export interface LanH1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH1(props: LanH1Props): React.ReactElement;
export default LanH1;
