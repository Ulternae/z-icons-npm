import React from 'react';

export interface LanToggleOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleOnThin(props: LanToggleOnThinProps): React.ReactElement;
export default LanToggleOnThin;
