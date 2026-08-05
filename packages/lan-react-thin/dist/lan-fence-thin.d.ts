import React from 'react';

export interface LanFenceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFenceThin(props: LanFenceThinProps): React.ReactElement;
export default LanFenceThin;
