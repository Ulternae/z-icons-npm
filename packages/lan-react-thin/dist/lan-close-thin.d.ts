import React from 'react';

export interface LanCloseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCloseThin(props: LanCloseThinProps): React.ReactElement;
export default LanCloseThin;
