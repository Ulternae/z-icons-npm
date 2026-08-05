import React from 'react';

export interface LanAwardSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardSimpleThin(props: LanAwardSimpleThinProps): React.ReactElement;
export default LanAwardSimpleThin;
