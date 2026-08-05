import React from 'react';

export interface LanCroissantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCroissantThin(props: LanCroissantThinProps): React.ReactElement;
export default LanCroissantThin;
