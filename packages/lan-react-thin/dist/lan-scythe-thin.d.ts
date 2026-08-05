import React from 'react';

export interface LanScytheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScytheThin(props: LanScytheThinProps): React.ReactElement;
export default LanScytheThin;
