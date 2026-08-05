import React from 'react';

export interface LanGlobeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeThin(props: LanGlobeThinProps): React.ReactElement;
export default LanGlobeThin;
