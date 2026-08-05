import React from 'react';

export interface LanBeeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeeThin(props: LanBeeThinProps): React.ReactElement;
export default LanBeeThin;
