import React from 'react';

export interface LanWhistleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWhistleThin(props: LanWhistleThinProps): React.ReactElement;
export default LanWhistleThin;
