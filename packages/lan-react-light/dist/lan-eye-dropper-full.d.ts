import React from 'react';

export interface LanEyeDropperFullProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEyeDropperFull(props: LanEyeDropperFullProps): React.ReactElement;
export default LanEyeDropperFull;
