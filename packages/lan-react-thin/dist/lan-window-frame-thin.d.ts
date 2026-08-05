import React from 'react';

export interface LanWindowFrameThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowFrameThin(props: LanWindowFrameThinProps): React.ReactElement;
export default LanWindowFrameThin;
