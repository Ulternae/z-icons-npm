import React from 'react';

export interface LanBirdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBird(props: LanBirdProps): React.ReactElement;
export default LanBird;
