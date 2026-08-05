import React from 'react';

export interface LanDinosaurThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDinosaurThin(props: LanDinosaurThinProps): React.ReactElement;
export default LanDinosaurThin;
