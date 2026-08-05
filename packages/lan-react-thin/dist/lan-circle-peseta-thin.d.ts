import React from 'react';

export interface LanCirclePesetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePesetaThin(props: LanCirclePesetaThinProps): React.ReactElement;
export default LanCirclePesetaThin;
