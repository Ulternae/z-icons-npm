import React from 'react';

export interface LanMinusLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMinusLargeThin(props: LanMinusLargeThinProps): React.ReactElement;
export default LanMinusLargeThin;
