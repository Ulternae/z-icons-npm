import React from 'react';

export interface LanMergeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMergeThin(props: LanMergeThinProps): React.ReactElement;
export default LanMergeThin;
