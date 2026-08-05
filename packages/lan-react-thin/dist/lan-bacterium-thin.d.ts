import React from 'react';

export interface LanBacteriumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacteriumThin(props: LanBacteriumThinProps): React.ReactElement;
export default LanBacteriumThin;
