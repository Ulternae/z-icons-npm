import React from 'react';

export interface LanCircleLariThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleLariThin(props: LanCircleLariThinProps): React.ReactElement;
export default LanCircleLariThin;
