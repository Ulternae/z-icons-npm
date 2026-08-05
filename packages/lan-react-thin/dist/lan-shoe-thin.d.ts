import React from 'react';

export interface LanShoeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoeThin(props: LanShoeThinProps): React.ReactElement;
export default LanShoeThin;
