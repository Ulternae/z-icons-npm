import React from 'react';

export interface LanCircleLiraThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLiraThin(props: LanCircleLiraThinProps): React.ReactElement;
export default LanCircleLiraThin;
