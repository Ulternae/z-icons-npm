import React from 'react';

export interface LanSquareLiraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareLiraThin(props: LanSquareLiraThinProps): React.ReactElement;
export default LanSquareLiraThin;
