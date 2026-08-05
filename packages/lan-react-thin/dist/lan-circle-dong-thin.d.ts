import React from 'react';

export interface LanCircleDongThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleDongThin(props: LanCircleDongThinProps): React.ReactElement;
export default LanCircleDongThin;
