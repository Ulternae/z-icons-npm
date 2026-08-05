import React from 'react';

export interface LanPopsicleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopsicleThin(props: LanPopsicleThinProps): React.ReactElement;
export default LanPopsicleThin;
