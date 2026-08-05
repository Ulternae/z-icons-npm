import React from 'react';

export interface LanSquarePesetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePesetaThin(props: LanSquarePesetaThinProps): React.ReactElement;
export default LanSquarePesetaThin;
