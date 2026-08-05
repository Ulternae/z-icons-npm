import React from 'react';

export interface LanStethoscopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStethoscopeThin(props: LanStethoscopeThinProps): React.ReactElement;
export default LanStethoscopeThin;
