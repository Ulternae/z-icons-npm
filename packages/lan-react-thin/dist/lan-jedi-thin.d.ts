import React from 'react';

export interface LanJediThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJediThin(props: LanJediThinProps): React.ReactElement;
export default LanJediThin;
