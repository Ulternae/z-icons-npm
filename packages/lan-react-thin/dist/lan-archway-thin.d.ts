import React from 'react';

export interface LanArchwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArchwayThin(props: LanArchwayThinProps): React.ReactElement;
export default LanArchwayThin;
