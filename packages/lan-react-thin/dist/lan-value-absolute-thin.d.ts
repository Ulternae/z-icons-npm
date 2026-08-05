import React from 'react';

export interface LanValueAbsoluteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanValueAbsoluteThin(props: LanValueAbsoluteThinProps): React.ReactElement;
export default LanValueAbsoluteThin;
