import React from 'react';

export interface LanCircleCruzeiroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCruzeiroThin(props: LanCircleCruzeiroThinProps): React.ReactElement;
export default LanCircleCruzeiroThin;
