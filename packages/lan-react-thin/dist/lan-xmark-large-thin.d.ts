import React from 'react';

export interface LanXmarkLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarkLargeThin(props: LanXmarkLargeThinProps): React.ReactElement;
export default LanXmarkLargeThin;
