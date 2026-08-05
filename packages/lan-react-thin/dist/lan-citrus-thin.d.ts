import React from 'react';

export interface LanCitrusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCitrusThin(props: LanCitrusThinProps): React.ReactElement;
export default LanCitrusThin;
