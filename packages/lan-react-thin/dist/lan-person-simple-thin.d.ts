import React from 'react';

export interface LanPersonSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSimpleThin(props: LanPersonSimpleThinProps): React.ReactElement;
export default LanPersonSimpleThin;
