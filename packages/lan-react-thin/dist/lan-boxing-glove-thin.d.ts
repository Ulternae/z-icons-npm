import React from 'react';

export interface LanBoxingGloveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxingGloveThin(props: LanBoxingGloveThinProps): React.ReactElement;
export default LanBoxingGloveThin;
