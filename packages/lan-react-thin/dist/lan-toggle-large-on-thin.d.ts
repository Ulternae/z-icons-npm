import React from 'react';

export interface LanToggleLargeOnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleLargeOnThin(props: LanToggleLargeOnThinProps): React.ReactElement;
export default LanToggleLargeOnThin;
