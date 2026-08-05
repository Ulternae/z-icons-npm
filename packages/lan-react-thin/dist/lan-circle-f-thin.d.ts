import React from 'react';

export interface LanCircleFThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFThin(props: LanCircleFThinProps): React.ReactElement;
export default LanCircleFThin;
