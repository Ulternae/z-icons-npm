import React from 'react';

export interface LanHyphenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHyphenThin(props: LanHyphenThinProps): React.ReactElement;
export default LanHyphenThin;
