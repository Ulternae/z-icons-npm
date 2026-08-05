import React from 'react';

export interface LanWindowCloseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowCloseThin(props: LanWindowCloseThinProps): React.ReactElement;
export default LanWindowCloseThin;
