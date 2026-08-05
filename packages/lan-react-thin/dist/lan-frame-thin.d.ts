import React from 'react';

export interface LanFrameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFrameThin(props: LanFrameThinProps): React.ReactElement;
export default LanFrameThin;
