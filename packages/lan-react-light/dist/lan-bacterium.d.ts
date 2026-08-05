import React from 'react';

export interface LanBacteriumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBacterium(props: LanBacteriumProps): React.ReactElement;
export default LanBacterium;
