import React from 'react';

export interface LanSquareCruzeiroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCruzeiroThin(props: LanSquareCruzeiroThinProps): React.ReactElement;
export default LanSquareCruzeiroThin;
